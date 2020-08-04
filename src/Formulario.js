import React, { Component } from 'react';
import FormValidator from './FormValidator';
import PopUp from './PopUp';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com uma descrição'
            },
            {
                campo: 'saldo',
                metodo: 'isInt',
                args: [{ min: 0, max: 9999 }],
                validoQuando: true,
                mensagem: 'Entre com um saldo'
            },
        ]
        );

        this.stateInicial = {
            codigo: '',
            nome: '',
            saldo: '',
            validacao: this.validador.valido()
        }

        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitFormulario = () => {
        const validacao = this.validador.valida(this.state);

        if (validacao.isValid) {
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        } else {
            const { nome, saldo } = validacao;
            const campos = [nome, saldo];

            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });
            camposInvalidos.forEach(
                campo => {
                    PopUp.exibeMensagem('error', campo.message);
                }
            );
        }

    }

    render() {

        const { nome, saldo } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-fiel col s6">
                        <label className="input-fiel" htmlFor="nome">Nome</label>
                        <input
                            className="validate"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-fiel col s6">
                        <label className="input-fiel" htmlFor="saldo">Saldo</label>
                        <input
                            className="validate"
                            id="saldo"
                            type="text"
                            name="saldo"
                            value={saldo}
                            onChange={this.escutadorDeInput} />
                    </div>
                </div>
                <button type="button" onClick={this.submitFormulario}
                    className="waves-effect waves-light btn indigo lighten-2">Salvar</button>
            </form>
        )
    }

}

export default Formulario;