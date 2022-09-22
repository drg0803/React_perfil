import React, { Component } from 'react';
import './Perfil.css';

class Perfil extends Component {
    render() {
              
      let img = 'https://img.estadao.com.br/fotos/politica/eleicoes-2020/SC/FSC240000791600_div.jpg'
      
      return (
        <img src={img} width={150} height={200} />
      );
    }
  }

  export default Perfil;