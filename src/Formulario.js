import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.stateInicial = {
            codigo: '',
            descricao: '',
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
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
    }

    render() {

        const { codigo, descricao } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-fiel col s6">
                        <label className="input-fiel" htmlFor="codigo">Codigo</label>
                        <input
                            className="validate"
                            id="codigo"
                            type="text"
                            name="codigo"
                            value={codigo}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-fiel col s6">
                        <label className="input-fiel" htmlFor="descricao">Descrição</label>
                        <input
                            className="validate"
                            id="descricao"
                            type="text"
                            name="descricao"
                            value={descricao}
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