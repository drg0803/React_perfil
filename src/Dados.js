import React, { Component } from 'react';
import './Dados.css';

class Dados extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };

    this.entrar = this.entrar.bind(this);
  }
  //dados fictícios
  entrar(){
    this.setState({
      nome: 'Cleiton da Rocha',
      dados: 'cleitinrocha@gmail.com | (13)99998-9766 | Itanhaém - SP',
      formacao: 'Análise e Desenvolvimento de Sistemas',
      exp: 'Conhecimento em PHP, HTML, CSS, JavaScript e Banco de Dados',
      projeto: 'Projetos nas áreas de TI'
    });
  }

  render(){
    return(
      <div>
        <center>
          <button onClick={this.entrar}>Entrar</button>
          <h1>{this.state.nome}</h1>
          <h2>{this.state.dados}</h2>
          <h3>{this.state.formacao}</h3>
          <h4>{this.state.exp}</h4>
          <h5>{this.state.projeto}</h5>
        </center>
      </div>
    );
  }
}

export default Dados;