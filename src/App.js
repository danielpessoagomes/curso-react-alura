import React, { Component, useState } from 'react';
import './App.css';
import Tabela from './Tabela';
import ContaClicks from './ContaClicks';

class App extends Component {

  state = {
    categorias: [
      {
        codigo: 1,
        descricao: "Honorário mensal"
      },
      {
        codigo: 2,
        descricao: "Honorário vencido"
      },
      {
        codigo: 3,
        descricao: "Honorário extra"
      },
      {
        codigo: 4,
        descricao: "Imposto de Renda"
      },
    ]
  };

  removerCategoria = index => {

    const { categorias } = this.state;

    this.setState(
      {
        categorias : categorias.filter((categoria, posAtual) => {
          return posAtual !== index;
        }),
      }
    );

  };

  render() {
    return (
      <div className="App">
        <Tabela categorias={ this.state.categorias} removerCategoria = { this.removerCategoria } />
        <ContaClicks />
      </div>
    );
  }

}

export default App;
