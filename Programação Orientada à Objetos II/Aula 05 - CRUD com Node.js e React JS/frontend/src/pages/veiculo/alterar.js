import React, { Component } from 'react';
import api from '../../services/api'

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeVeiculo = this.onChangeVeiculo.bind(this);
        this.onChangeAno = this.onChangeAno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            veiculo: {
                id_veiculo: "",
                nome_veiculo: "",
                ano_veiculo: ""
            },
        };
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        try {
            const response = await api.get(`/veiculos/${id}`);
            this.setState({ veiculo: response.data[0] });
        }
        catch (error) {
            console.log(error)
        }
    }

    onChangeId(e) {
        this.setState({
            id_veiculo: e.target.value
        });
    }

    onChangeVeiculo(e) {
        this.setState({
            nome_veiculo: e.target.value
        })
    }
    onChangeAno(e) {
        this.setState({
            ano_veiculo: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            id: this.state.veiculo.id_veiculo,
            nome: this.state.veiculo.nome_veiculo,
            ano: this.state.veiculo.ano_veiculo
        };

        console.log('Nome do veículo: ' + obj.nome)

        api.put('/veiculos/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/listar');
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update Business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>ID  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.veiculo.id}
                            onChange={this.onChangeId.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Veículo </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.veiculo.nome}
                            onChange={this.onChangeVeiculo.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ano </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.veiculo.ano}
                            onChange={this.onChangeAno.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Salvar"
                            className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}