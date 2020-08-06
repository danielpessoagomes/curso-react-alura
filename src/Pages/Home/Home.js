import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './Home.css';
import Tabela from '../../Components/Tabela/Tabela';
import Form from '../../Components/Formulario/Formulario';
import Header from '../../Components/Header/Header';
import PopUp from '../../Utils/PopUp';
import ApiService from '../../Utils/ApiService';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      bancos: []
    };
  }

  removerBanco = codigo => {
    const { bancos } = this.state;

    const bancosAtualizado = bancos.filter(banco => {
      return banco.codigo !== codigo;
    })
    ApiService.removeBanco(codigo)
      .then(res => {
        this.setState({bancos : [...bancosAtualizado]})
        PopUp.exibeMensagem('error', 'Banco excluído com sucesso');
      })
      .catch(err => {
        PopUp.exibeMensagem('error', 'Erro na comunicação ao tentar API')
      });
  };

  escutadorDeSubmit = banco => {

    const b = {
      codigo: null,
      nome: banco.nome,
      saldo: banco.saldo,
      dataSaldo: new Date()
    }

    ApiService.criaBanco(JSON.stringify(b))
    .then(res => {
      console.log(res)
      this.setState({bancos:[...this.state.bancos, banco]});
      PopUp.exibeMensagem("success", "Banco criado com sucesso");
    })
    .catch(err => PopUp.exibeMensagem("error", "Erro ao tentar cadastrar o banco"))
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
