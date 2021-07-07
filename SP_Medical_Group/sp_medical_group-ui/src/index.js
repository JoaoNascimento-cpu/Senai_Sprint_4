import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import { parseJWT, userLogado } from './Services/auth'


import './index.css';


import login from './Pages/Login/login';
import notFound from './Pages/NotFound/notfound';

import Adm from './Pages/adm/adm';
import AdmCadastrar from './Pages/adm/admCadastro';
import AdmListar from './Pages/adm/admListar';

import Medico from './Pages/medico/medico';
import ListaMedico from './Pages/medico/medicoLista'

import Usuario from './Usuario/usuario';
import ListaUsuario from './Usuario/listaUsuario';


import reportWebVitals from './reportWebVitals';

const PermissaoAdm = ({ component : Component}) =>
(
  <Route
  
    render = { props =>
    
      userLogado() && parseJWT().role === "1" ?

      <Component {...props}/> :

      <Redirect to="notfound"/>

    }
  
  />
)

const PermisaoMedico = ({ component : Component }) =>
(
  <Route
  
    render = { props =>
    
      userLogado() && parseJWT().role === "2" ?

      <Component {...props}/> :

      <Redirect to="notfound"/>
    
    }
  
  />
)

const PermisaoUsuario = ({ component : Component }) =>
(
  <Route
  
    render = { props =>
    
      userLogado() && parseJWT().role === "3" ?

      <Component {...props}/> :

      <Redirect to="notfound"/>
    
    }
  
  />
)

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path ="/" component={login} />
        <Route path = "/notFound" component={notFound}/>
        

        <PermissaoAdm path="/adm" component={Adm}/>
        <PermissaoAdm path="/admListar" component={AdmListar}/>
        <PermissaoAdm path="/admCadastrar" component={AdmCadastrar}/>

        <PermisaoMedico path="/medico" component={Medico}/>
        <PermisaoMedico path="/medicoLista" component={ListaMedico}/>

        <PermisaoUsuario path="/paciente" component={Usuario}/>
        <PermisaoUsuario path="/listaUsuario" component={ListaUsuario}/>
        
        <Redirect to = "/notFound" component={notFound}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render( routing ,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
