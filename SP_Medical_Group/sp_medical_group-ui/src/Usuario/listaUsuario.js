import { Component } from "react"

class ListaUsuario extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            listaUser : []
        }
    }

    componentDidMount()
    {
        this.listarConsultaUser();
    }

    listarConsultaUser()
    {
        fetch('https://localhost:5001/api/Consulta/ConsultasUsuario',
        {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        })

        .then(resp => resp.json())

        .then(resposta => this.setState({ listaUser : resposta }))

        .catch((erro) => console.log(erro))
    }

    funcaoLogout = () => 
  {
      localStorage.removeItem('token')
  }

    render()
    {
        return(

            <div>
                <header class="cab-UL">
        <div class="ctn-UL">
             
            <div class="header-UL">
                <a href="/">login</a>
                <a href="/"><button onClick={this.funcaoLogout}>logout</button></a>
            </div>
        </div>
    </header>

    <main class="main-UL">
        {
            this.state.listaUser.map( (lista) => {
                return(
            
        <div class="lista-UL">
            <div class="meio-lista-UL">
                <div class="meio-input-UL">
                    <div class="meio-p-UL">
                        <p>médico</p>
                    </div>
                    <input type="text" placeholder={lista.idMedicoNavigation.nomeMedico} readOnly/>
                </div>
                <div class="meio-input-UL">
                    <div class="meio-p-UL">
                        <p>especialidade</p>
                    </div>
                    <input type="text" placeholder={lista.idMedicoNavigation.idEspecialidadeNavigation.especialidades} readOnly/>
                </div>
                <div class="meio-input-UL">
                    <div class="meio-p-UL">
                        <p>endereço</p>
                    </div>
                    <input type="text" placeholder={lista.idMedicoNavigation.idClinicaNavigation.endereco} readOnly/>
                </div>
                <div class="meio-input-UL">
                    <div class="meio-p-UL">
                        <p>clínica</p>
                    </div>
                    <input type="text" placeholder={lista.idMedicoNavigation.idClinicaNavigation.nomeFantasia} readOnly/>
                </div>
            </div>
            <div class="meio-lista-UL">
                <div class="meio-input-UL">
                    <div class="meio-p-UL">
                        <p>data</p>
                    </div>
                    <input type="text" placeholder={new Intl.DateTimeFormat('pt-BR').format(new Date(lista.dataConsulta))} readOnly/>
                </div>
                <div class="meio-input-UL">
                    <div class="meio-p-UL">
                        <p>situação</p>
                    </div>
                    <input type="text" placeholder={lista.idSituacaoNavigation.tipoSituacao} readOnly/>
                </div>
                <div class="meio-input-UL">
                    <div class="meio-p-UL">
                        <p>descrição</p>
                    </div>
                    <input type="text" placeholder={lista.descricao} readOnly/>
                </div>
                <div class="meio-input-UL">
                    <div class="meio-p-UL">
                        <p>exame</p>
                    </div>
                    <input type="text" placeholder={lista.exames} readOnly/>
                </div>
            </div>
        </div>
                );
            })
        }
    </main>
            </div>

        );
    }
}

export default ListaUsuario