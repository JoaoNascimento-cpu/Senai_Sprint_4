import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

//define a função DataFormatada retonando o subtitulo da data formatada
function DataFormatada(props) 
{
  return <h2> Horário Atual: {props.date.toLocaleTimeString()}</h2>  
}

//define a classe clock que será chamada na renderização dentro do app
class Clock extends React.Component
{
  constructor(props)
  {
    //
    super(props);
    this.state = 
    {
      //define o estado 'date' pegando a data/hora atual
      date : new Date()
    };
  }
  //ciclo de vida que começa quando o componete clock é inserido na arvore DOM
  //atravez da função setInterval o relógio é criado
  //chamada da função thick ocorre a cada 1000 milisegundos = 1 segundo
  componentDidMount()
  {
    this.timerID = setInterval( () =>{
      this.thick()
    }, 1000 );

    console.log("eu sou o relógio" + this.timerID)
  }

  //ciclo de vida que ocorre quando o componete clock é removido da DOM
  //quando isso ocorre, essa função limpa o relógio criado pela setInterval
  componentWillUnmount()
  {
    clearInterval(this.timerID);
  }

  //define a hora atual toda vez que essa função é chamada
  thick()
  {
    this.setState({
      date : new Date()
    });
  }

  //renderiza a tela do titulo
  render()
  {
    return(
      <div>
        <h1>Relógio</h1>
        <DataFormatada date = {this.state.date}/>
      </div>
    )
  }
  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* faz chamada de dois relogios para mostrar a independência entre eles */}
        <Clock/>
        <Clock/>
      </header>
    </div>
  );
}



//declara que a função app pode ser usadda fora do escopo dela mesma
export default App;
