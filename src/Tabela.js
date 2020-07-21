import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Código</th>
                <th>Descricão</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const linhas  = props.categorias.map((linha, index) => {
        return (
            <tr key={index}>
                <td>{linha.codigo}</td>
                <td>{linha.descricao}</td>
                <td><button onClick = { () => { props.removerCategoria(index) }} className="waves-effect waves-light btn indigo lighten-2">Remover</button></td>
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

        const { categorias, removerCategoria } = this.props;

        return (
            <table className="centered highlight">
                <TableHead />
                <TableBody categorias={categorias} removerCategoria={removerCategoria} />
            </table>
        )
    }
}

export default Tabela;