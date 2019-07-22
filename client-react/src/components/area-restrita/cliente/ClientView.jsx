import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import { ClienteService } from '../../../services/ClienteService';
import BarraAcoes from '../../shared/barra-acoes/BarraAcoes';


class ClienteView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cliente:{
                _id: '',
                rsocial: '',
                fantasia: '',
                cnpj: '',
                ie: '',
                endereco: '',
                numero: '',
                bairro: '',
                cidade: ''
            }
        }   
    }
    
    componentDidMount(){

        if (this.props.match.params.clienteId){
            ClienteService.get(this.props.match.params.clienteId) 
                .then(res =>{
                    console.log(res.data)                                  
                    this.setState({
                        cliente:res.data
                    })
                })
        }
    }

    render(){
        const { state } = this
        return (
            <div>
                <BarraAcoes>
                    <div className="float-right m-1">
                        <Link to={`/arearestrita/cliente/novo/${state.cliente._id}`}  className="btn btn-sm btn-primary" onPress={() => this.props.navigation.navigate('')}>
                            Editar
                        </Link>
                    </div>
                </BarraAcoes>
                <div className="conteudo">
                    <div className="form-group row">
                        <label htmlFor="rsocial" className="col-sm-2 col-form-label control-form-label">Razão Social:</label>
                        <div className="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext" id="rsocial" value={state.cliente.rsocial} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="fantasia" className="col-sm-2 col-form-label control-form-label">Fantasia:</label>
                        <div className="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext" id="fantasia" value={state.cliente.fantasia} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="cnpj" className="col-sm-2 col-form-label control-form-label">CNPJ:</label>
                        <div className="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext" id="cnpj" value={state.cliente.cnpj} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="ie" className="col-sm-2 col-form-label control-form-label">Insc. Estadual</label>
                        <div className="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext" id="ie" value={state.cliente.ie} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="endereco" className="col-sm-2 col-form-label control-form-label">Endereço:</label>
                        <div className="col-sm-8">
                            <input type="text" readonly class="form-control-plaintext" id="endereco" value={state.cliente.endereco} />
                        </div>
                        <div className="col-sm-2">
                            <input type="text" readonly class="form-control-plaintext" id="numero" value={state.cliente.numero} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="bairro" className="col-sm-2 col-form-label control-form-label">Bairro:</label>
                        <div className="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext" id="bairro" value={state.cliente.bairro} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="endereco" className="col-sm-2 col-form-label control-form-label">Cidade:</label>
                        <div className="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext" id="endereco" value={state.cliente.cidade.nome} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClienteView;