import { Component } from 'react';
import './App.css';

class GitHub extends Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      valores:[],
      nomeRep:''
    }
  }
  buscarUser = (elemento) =>
  {
    elemento.preventDefault();

    fetch('https://api.github.com/users/' + this.state.nomeRep + '/repos')
    
    .then(resposta => resposta.json())

    .then(dados => this.state({ valores : dados}))

    .catch(erro => console.log(erro))

    console.log('ta funfando confia')
    
  }

  novoNome = async (nome) => 
  {
    await this.setState({ nomeRep : nome.target.value })
    console.log(this.state.nomeRep)
  }

  limparCampo = () =>
  {
    this.setState(
      {
        nomeRep:''
      }
    )
  }

  render() {
    return (
      <div>
        <header className="App-header">

<section className="cab">
  <p className="cabp">Github Finder</p>
</section>

<main className="search">
  <div className="area">

    <div className="titulo">
      <h1>Procure aqui!!</h1>
    </div>

    <div className="btn">

      <form className="forms" onSubmit={this.buscarUser}>
        <input className="input" onChange={this.novoNome} value={this.state.search} placeholder="Nome do usuário" type="text"/>
        <button className="btn" onClick={this.limparCampo} onClick={this.buscarUser}>Pesquisar</button>
      </form>

    </div>

      <table className="tabela">

        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Tamanho</th>
          </tr>
        </thead>

        <tbody>
              {  this.state.valores.map( (repositorio) => {           
                  return(
                    <tr key={repositorio.id}>
                      <td>{repositorio.id}</td>
                      <td>{repositorio.name}</td>
                      <td>{repositorio.description}</td>
                      <td>{repositorio.created_at}</td>
                      <td>{repositorio.size}</td>
                    </tr>
                  )
                })
              }
            </tbody>
      </table>

  </div>
</main>

</header>
      </div>
    )
  }
}
function App() {
  return (
    <div>
      <GitHub/>
    </div>
  );
}

export default App;
