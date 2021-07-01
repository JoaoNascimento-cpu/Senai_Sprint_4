import {Component} from 'react';

buscarUsuario = (element) =>
{
    Element.preventDefault();

    console.log('Está Buscando')
    fetch('https://api.github.com/users/' + this.state.repositoryName + 'repos')
    .then(response => response.json() )

    .then(list => this.SetState({repositoryList : list}))

    .catch(error => console.log(error))
}