import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = { veiculos: [] };
    }

    async componentDidMount() {
        try {
            const response = await api.get('/veiculos');
            this.setState({ veiculos: response.data })
        }
        catch (error) {
            console.log(error)
        }
    }

    delete() {
        console.log('ID do veiculo: ' + this.props.id)
        try {
            api.delete('/veiculos/' + this.props.id)
        }
        catch (error) {
            console.log(error)
        }

        //this.props.history.push('/listar');
    }

    render() {
        return (
            <div>
                <h3 align="center">Veículos</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Veículo</th>
                            <th>Ano</th>
                            <th colSpan="2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>{
                        this.state.veiculos.map(veiculo => (
                            <tr key={veiculo.id}>
                                <td>
                                    {veiculo.id}
                                </td>
                                <td>
                                    {veiculo.nome}
                                </td>
                                <td>
                                    {veiculo.ano}
                                </td>
                                <td>
                                    <Link to={`/atualizar/${veiculo.id}`}><button className="btn btn-primary">Editar</button></Link>
                                </td>
                                <td>
                                    <button className="btn btn-danger" id={veiculo.id} onClick={this.delete}>Excluir</button>
                                </td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }
}