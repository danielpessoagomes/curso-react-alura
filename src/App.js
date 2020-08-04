import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Tabela from './Tabela';
import Form from './Formulario';
import Header from './Header';
import PopUp from './PopUp';
import ApiService from './ApiService';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      bancos: []
    };
  }

  removerBanco = codigo => {
    const { bancos } = this.state;

    this.setState(
      {
        bancos: bancos.filter((banco) => {
          return banco.codigo !== codigo;
        }),
      }
    );
    PopUp.exibeMensagem('error', 'Banco excluído com sucesso');
    ApiService.removeBanco(codigo)
  };

  escutadorDeSubmit = banco => {
    console.log(banco);

    const b = {
      codigo: null,
      nome: banco.nome,
      saldo: banco.saldo,
      dataSaldo: new Date()
    }

    ApiService.criaBanco(JSON.stringify(b))
    .then(res => res)
    .then(banco => {
      console.log('THEN', banco);
      this.setState({ bancos: [...this.state.bancos, banco] })
      PopUp.exibeMensagem('success', 'Banco adicionado com sucesso');
    })
  }

  componentDidMount() {
    ApiService.ListaBancos()
      .then(res => {
        this.setState({ bancos: [...this.state.bancos, ...res.content] })
      })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <Form escutadorDeSubmit={this.escutadorDeSubmit} />
          <h1>Bancos</h1>
          <Tabela bancos={this.state.bancos} removerBanco={this.removerBanco} />
        </div>
      </Fragment>
    );
  }

}

export default App;
