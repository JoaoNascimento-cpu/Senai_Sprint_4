using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sp_Medical_Group.WebAPI.Domains;
using Sp_Medical_Group.WebAPI.Interfaces;
using Sp_Medical_Group.WebAPI.Repositories;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace Sp_Medical_Group.WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultaController : ControllerBase
    {
        private IConsultaRepository consulta { get; set; }

        public ConsultaController()
        {
            consulta = new ConsultaRepository();
        }

        [HttpGet("All")]
        
        //http://5000/api/Consulta
        public IActionResult Listar()
        {
            try
            {
                return Ok(consulta.ListarConsulta());
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        
        [HttpGet("ListarTudo")]
        public IActionResult ListarTudo()
        {
            try
            {
                return Ok(consulta.ListarTudo());
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet("ConsultasUsuario")]
        public IActionResult UsuarioConsulta()
        {
            try
            {
                int idUsuario = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                return Ok(consulta.ConsultasPaciente(idUsuario));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [Authorize(Roles = "2")]
        [HttpGet("MedicoConsultas")]
        public IActionResult MedicoConsultas()
        {
            try
            {
                int idUsuario = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                return Ok(consulta.ConsultasMedico(idUsuario));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet("{id}")]
        public IActionResult BuscarId(int id)
        {
            try
            {
                return Ok(consulta.BuscarId(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [Authorize(Roles = "1")]
        [HttpPost]
        public IActionResult NovoCon(Consultum novaConsulta)
        {
            try
            {
                consulta.Cadastrar(novaConsulta);
                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            try
            {
                consulta.Deletar(id);
                return StatusCode(204);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        
        [HttpPut("{id}")]
        public IActionResult AtualizarDados(int id, Consultum novaConsulta)
        {
            try
            {
                consulta.Atualizar(id, novaConsulta);
                return StatusCode(204);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        
        [HttpPatch("{id}")]
        public IActionResult Patch(int id, Consultum status)
        {
            try
            {
                consulta.Situacao(id, status.IdSituacao.ToString());
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

    }
}
