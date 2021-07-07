import { Component } from 'react'
import { Link } from 'react-router-dom'


class Adm extends Component
{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    

    funcaoLogout = () => 
    {
        localStorage.removeItem('token')
    }  


  render()
  {
    return(

        <div>
          <header className="cabeçalho">
        <div className="algo-ADM">
            

            <div className="header-ADM">
                <Link to ="/">login</Link>
                <Link to ="/"></Link>
                <Link to ="/"><button onClick={this.funcaoLogout}>logout</button></Link>
            </div>
        </div>
    </header>

    <main className="main-ADM">
        <section className="algo-ADM">
            <div className="textox">
                
                <p>acesso do</p>
                <p>administrador</p>
              
            </div>

            <div className="meio-ADM">
                <div className="line-ADM"></div>
            </div>

            
        </section>

        <section id="botao-ADM">
            <Link to ="/admcadastrar"><button onclick={this.state.cadastrarCon}>cadastrar consultas</button></Link>
            <Link to ="/admlistar"><button onclick={this.state.listaConsulta}>lista de consultas</button></Link>
            <button onclick="">cadastrar usuário</button>
        </section>
        
    </main>
        </div>

    );
  }
}


export default Adm;