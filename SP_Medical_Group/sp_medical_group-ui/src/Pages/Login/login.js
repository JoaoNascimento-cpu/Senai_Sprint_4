import { Component } from "react";
import axios from 'axios';
import '../../Asset/Login/login.css'

class login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : '',
            errorMessage : ''
        }
    }
    
    efetuarLogin = (Login) =>
    {
        Login.preventDefault()
        
        this.setState({errorMensage : ''})
        
        axios.post('http://localhost:5000/api/Login', 
        {
            email : this.state.email,
            senha : this.state.senha
        })
    }
    

    render(){
        return(
            <div className="corpo">
                <main className="tabela_login">
                    <h1>login</h1>
                    <section className="login_input">
                        <div className = "campos" >
                            <p >Insira seu e-mail</p>
                            <input/>
                            <p>Insira sua senha</p>
                            <input/>
                            <button/>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default login;
