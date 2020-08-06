import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Saldo</th>
                <th></th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const linhas  = props.bancos.map((linha) => {
        return (
            <tr key={linha.codigo}>
                <td>{linha.codigo}</td>
                <td>{linha.nome}</td>
                <td>{linha.saldo}</td>
                <td><button onClick = { () => { props.removerBanco(linha.codigo) }} className="waves-effect waves-light btn indigo lighten-2">Remover</button></td>
            </tr>
        )
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    )
}

class Tabela extends Component {
    render() {

        const { bancos, removerBanco } = this.props;

        return (
            <table className="centered highlight">
                <TableHead />
                <TableBody bancos={bancos} removerBanco={removerBanco} />
            </table>
        )
    }
}

export default Tabela;