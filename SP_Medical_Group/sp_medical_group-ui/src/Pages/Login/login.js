import { Component } from "react";
import axios from 'axios';
import '../../Asset/Login/login.css'
import { parseJWT } from '../../Services/auth'

class login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : '',
            errorMessage : '',
            isLoading : false
        }
    }
    
    efetuaLogin = (event) => {
        event.preventDefault();

        this.setState({errorMessage : '', isLoading : true})

        axios.post('http://LocalHost:5000/api/Login',{
            email : this.state.email,
            senha : this.state.senha
        })
        

        .then(resposta => {
            if (resposta.status === 200) {
                
                localStorage.setItem('token', resposta.data.token)

                console.log('meu token é: ' + resposta.data.token)

                this.setState({ isLoading : false })

                // let base64 = localStorage.getItem('token').split('.')[1];

                // console.log(base64)

                // console.log(window.atob(base64));
                // console.log(JSON.parse(window.atob(base64)).role);

                console.log(parseJWT());

                console.log(parseJWT().role);

                if (parseJWT().role === "1" ) {

                    this.props.history.push('/adm')
                
                } else if(parseJWT().role === "2"){
                 
                    this.props.history.push('/medico')
                
                }else if(parseJWT().role === "3"){

                    this.props.history.push('/paciente')
                
                }
                
            }
        })

        .catch( () => {
            this.setState({ errorMessage : 'Email ou senha invalidos! Tente novamente. ' })
        })
        
    }
    atualizaCampoState = (campo) =>
    {
        this.setState({ [campo.target.name] : campo.target.value })
    }

    render(){
        return(
            <div>
                <main>
                    <section>
                        <p>Seja bem vinda(o)! <br/> Faça login para acessar sua conta.</p>

                        <form onSubmit={this.efetuaLogin}>
                            <input
                                type = "text"
                                name = "email"

                                value = {this.state.email}
                                onChange = {this.atualizaCampoState}
                                placeholder="username"
                            />


                            <input
                                type = "password"
                                name = "senha"

                                value = {this.state.senha}
                                onChange = {this.atualizaCampoState}
                                placeholder="password"
                            />

                            <p style={{color : 'red'}}>{this.state.errorMessage}</p>


                            {
                                this.state.isLoading === true &&
                                <button type = "submit" disabled>Loading...</button> 
                            }

                            {
                                this.state.isLoading === false &&
                                <button
                                    type = "submit"
                                    disabled={this.state.email === '' || this.state.senha === '' ? 'none' : ''} 
                                >
                                    Login
                                </button>
                            }

                            {/* <button type="submit">
                                Login
                            </button> */}
                        </form>
                    </section>
                </main>
            </div>
        )
    }
}
    
    export default login;
