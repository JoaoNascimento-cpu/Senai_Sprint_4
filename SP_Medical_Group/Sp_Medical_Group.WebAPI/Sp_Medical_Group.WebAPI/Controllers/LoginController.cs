using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Sp_Medical_Group.WebAPI.Domains;
using Sp_Medical_Group.WebAPI.Interfaces;
using Sp_Medical_Group.WebAPI.Repositories;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Sp_Medical_Group.WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUsuarioRepository usuario { get; set; }

        public LoginController()
        {
            usuario = new UsuarioRepository();
        }

        [HttpPost]
        public IActionResult Login(Usuario login)
        {
            //Busca o usuário pelo e-mail e senha
            Usuario permissao = usuario.Login(login.Email, login.Senha);

            //caso não encontre nenhum usuário  irá retornar um status code Not Found
            if (permissao == null)
            {
                return NotFound("E-mail ou senha invalidos");
            }

            //caso encontre prossegue a criação do token
            //Define os dados que serão fornecidos no Token - Payload
            var claims = new[]
            {
                //TipoDaClaim, ValorDaClaim
                new Claim(JwtRegisteredClaimNames.Email, permissao.Email),
                new Claim(JwtRegisteredClaimNames.Jti, permissao.IdUsuario.ToString()),
                new Claim(ClaimTypes.Role, permissao.IdTipoUsuario.ToString()),
                new Claim("role", permissao.IdTipoUsuario.ToString()),
            };

            //chave de acesso ao Token
            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("SPMG-Usuario-autenticação"));

            //Define as credenciais do token- Header
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            //gera token
            var token = new JwtSecurityToken
                (
                    issuer: "Sp_Medical_Group.WebAPI",      //definindo o emissor do token
                    audience: "Sp_Medical_Group.WebAPI",      //destinatário do token
                    claims: claims,               //dados definidos na linha 47
                    expires: DateTime.Now.AddMinutes(30), //tempo de expiração
                    signingCredentials: cred           //credenciais do token    
                );

            //retorna um Status code - 200(OK)

            return Ok
                (
                    new
                    {
                        token = new JwtSecurityTokenHandler().WriteToken(token)
                    }
                );
        }
    }
}
