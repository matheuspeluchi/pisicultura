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
                        <Link to={`/arearestrita/cliente/novo/${state.cliente._id}`}  className="btn btn-sm btn-primary">
                            Editar
                        </Link>
                    </div>
                </BarraAcoes>
                <div className="conteudo">

                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" href="#principal" role="tab" data-toggle="tab">Principal</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#endereco" role="tab" data-toggle="tab">Endereço</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contato" role="tab" data-toggle="tab">Contato</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#banco" role="tab" data-toggle="tab">Dados Bancários</a>
                        </li>
                    </ul>

                        
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane fade show active" id="principal">
                            <div className="form-group row">
                                <label htmlFor="rsocial" className="col-form-label control-form-label">Razão Social:</label>
                                <div className="col-sm-10">
                                    <input type="text"                                     
                                        className="form-control-plaintext" 
                                        name="rsocial" 
                                        disabled
                                        value={state.cliente.rsocial} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="fantasia" className="col-form-label control-form-label">Fantasia:</label>
                                <div className="col-sm-10">
                                    <input type="text"                                      
                                        className="form-control-plaintext" 
                                        name="fantasia" 
                                        disabled
                                        value={state.cliente.fantasia} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="cnpj" className="col-form-label control-form-label">CNPJ:</label>
                                <div className="col-sm-10">
                                    <input type="text"                                      
                                        className="form-control-plaintext" 
                                        name="cnpj" 
                                        disabled
                                        value={state.cliente.cnpj} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="ie" className="col-form-label control-form-label">Insc. Estadual</label>
                                <div className="col-sm-10">
                                    <input type="text"                                      
                                        className="form-control-plaintext" 
                                        name="ie" 
                                        disabled
                                        value={state.cliente.ie} />
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="endereco">
                            <div className="form-group row">
                                <label htmlFor="endereco" className="col-form-label control-form-label">Endereço:</label>
                                <div className="col-sm-8">
                                    <input type="text"                                      
                                        className="form-control-plaintext" 
                                        name="endereco" 
                                        disabled
                                        value={state.cliente.endereco} />
                                </div>
                                <div className="col-sm-2">
                                    <input type="text"                                      
                                        className="form-control-plaintext" 
                                        name="numero" 
                                        disabled
                                        value={state.cliente.numero} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="bairro" className="col-form-label control-form-label">Bairro:</label>
                                <div className="col-sm-10">
                                    <input type="text"                                      
                                        className="form-control-plaintext" 
                                        name="bairro" 
                                        disabled
                                        value={state.cliente.bairro} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="cidade" className="col-form-label control-form-label">Cidade:</label>
                                <div className="col-sm-10">
                                    <input type="text"                                      
                                        className="form-control-plaintext" 
                                        name="cidade" 
                                        disabled
                                        value={state.cliente.cidade.nome} />
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="contato">
                            <div className="form-group row">
                                <label htmlFor="contato" className="col-form-label control-form-label">Contato:</label>
                                <div className="col-sm-10">
                                    <input type="text"                                      
                                        className="form-control-plaintext" 
                                        name="contato" 
                                        disabled
                                        value={state.cliente.contato} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="telefone" className="col-form-label control-form-label">Telefone:</label>
                                <div className="col-sm-2">
                                    <input type="text"                                      
                                        className="form-control-plaintext" 
                                        name="telefone" 
                                        disabled
                                        value={state.cliente.telefone} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="telefone1" className="col-form-label control-form-label">Telefone:</label>
                                <div className="col-sm-2">
                                    <input type="text"                                     
                                        className="form-control-plaintext" 
                                        name="telefone1" 
                                        disabled
                                        value={state.cliente.telefone1} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="celular" className="col-form-label control-form-label">Celular:</label>
                                <div className="col-sm-2">
                                    <input type="text"                                     
                                        className="form-control-plaintext" 
                                        name="celular" 
                                        disabled
                                        value={state.cliente.celular} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="email" className="col-form-label control-form-label">E-mail:</label>
                                <div className="col-sm-4">
                                    <input type="text"                                     
                                        className="form-control-plaintext" 
                                        name="email" 
                                        disabled
                                        value={state.cliente.email} />
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="banco">
                            <div className="form-group row">
                                <label htmlFor="bancoNome" className="col-form-label control-form-label">Banco:</label>
                                <div className="col-sm-6">
                                    <input type="text"                                      
                                        className="form-control-plaintext" 
                                        name="bancoNome" 
                                        disabled
                                        value={state.cliente.bancoNome} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="bancoAgencia" className="col-form-label control-form-label">Agencia:</label>
                                <div className="col-sm-10">
                                    <input type="text"                                      
                                        className="form-control-plaintext" 
                                        name="bancoAgencia" 
                                        disabled
                                        value={state.cliente.bancoAgencia} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="bancoConta" className="col-form-label control-form-label">Conta:</label>
                                <div className="col-sm-10">
                                    <input type="text"
                                        
                                        className="form-control-plaintext" 
                                        name="bancoConta" 
                                        disabled
                                        value={state.cliente.bancoConta} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="bancoTitular" className="col-form-label control-form-label">Titular:</label>
                                <div className="col-sm-10">
                                    <input type="text"                                      
                                        className="form-control-plaintext" 
                                        name="bancoTitular" 
                                        disabled
                                        value={state.cliente.bancoTitular} />
                                </div>
                            </div>
                        </div>                   
                    </div>
            </div>
        </div>
        
        )
    }
}

export default ClienteView;