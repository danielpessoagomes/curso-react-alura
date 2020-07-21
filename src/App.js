import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Tabela from './Tabela';
import Form from './Formulario';
import Header from './Header';

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
        categorias: categorias.filter((categoria, posAtual) => {
          return posAtual !== index;
        }),
      }
    );

  };

  escutadorDeSubmit = categoria => {
    this.setState({ categorias: [...this.state.categorias, categoria] })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <Tabela categorias={this.state.categorias} removerCategoria={this.removerCategoria} />
          <Form escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }

}

export default App;
