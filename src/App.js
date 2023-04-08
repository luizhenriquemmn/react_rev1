
import './App.css';

import Comentario from './components/Comentario';
import { Component } from 'react';

class App extends Component{

  state = {
    comentarios: [
      {
        nome: 'joão',
        email: 'joao@gmail.com',
        data: new Date(2020,3,18),
        mensagem: 'Ola, tudo bem?'
      },
      {
        nome: 'maria',
        email: 'maria@gmail.com',
        data: new Date(2020,3,19),
        mensagem: 'Claro.. td ótimo'
      }      
    ]
  }


  render(){
    return (
      <div className="App">
        <h1>Meu Primeiro Projeto</h1>
        {this.state.comentarios.map((comentario,indice) => (
        <Comentario 
          key ={indice} //Obrigatorio ter indice
          nome ={comentario.nome}
          email = {comentario.email}
          data ={comentario.data.toString()}>
        {comentario.mensagem}
      </Comentario>
        ))}




      </div>
    );
  }



}

export default App;
