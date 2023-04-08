
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
    ],
    novoComentario:{
      nome: '',
      email: '',
      mensagem: ''
    }
  }


     /*MANIPULANDO ENVENTOS*/
  adicionarComentario = evento => {
    evento.preventDefault(); //Remover o Post
    console.log('Adicionando Comentário...')
    const novoComentario = {...this.state.novoComentario,data: new Date()}

    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: {nome: '',mensagem: '', email: ''}
    })

  }

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c != comentario)

    this.setState({comentarios:lista})
  }

  digitacao = evento =>{
    const {name,value} = evento.target
   
    this.setState({novoComentario:{...this.state.novoComentario, [name]: value}})
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
          data ={comentario.data}
          onRemove = {this.removerComentario.bind(this,comentario)}>
        {comentario.mensagem}
      </Comentario>
        ))}

      <form  method='post' onSubmit={this.adicionarComentario}>
        <h2>AdicionaComentário</h2>
        <div>
          <input 
          type = "text" 
          name ="nome" 
          value={this.state.novoComentario.nome}
          onChange={this.digitacao}
          placeholder='Digite seu nome'
        />
        </div>
        <div>
          <input 
            type = "email" 
            name ="email" 
            value={this.state.novoComentario.email}
            onChange={this.digitacao}
            placeholder='Digite seu email'
          />
        </div>
        <div>
          <textarea 
            name ="mensagem" 
            rows = "4"
            onChange={this.digitacao}
            value={this.state.novoComentario.mensagem}
          />
        </div>
        <button type='submit'>Adicionar Comentário</button>
      </form>


      </div>
    );
  }



}

export default App;
