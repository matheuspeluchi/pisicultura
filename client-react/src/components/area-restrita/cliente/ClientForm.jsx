import React, {Component} from 'react';

import BarraAcoes from '../../shared/BarraAcoes.jsx'
import {ClienteService} from '../../../services/ClienteSistemaService'
import { CidadeService } from '../../../services/CidadeService'

class ClienteForm extends Component {
    
    
    static defaultProps = {
        onSubmit: ()=> {}
    };

    constructor(props){
        
        super(props);

        this.state = {
            cliente:{
                id:'',
                rsocial: '',
                fantasia: '',
                cnpj: '',
                ie: '',
                endereco: '',
                enderecoNum: '',
                bairro: '',
                cidade: '',
                tipo:''
            },
            cidades:[],
        
        
        };

    }


    componentWillMount(){
        if (this.props.match.params.clienteId){
            ClienteService.get(this.props.match.params.clienteId) 
                .then(res =>{         
                    console.log(res.data);
                    this.setState({
                        cliente:res.data,
                        isLoading: false
                    })
                })
            }

        CidadeService.getAll()
            .then(res => {                
                this.setState({cidades: res.data})
            })
                
    }
    
    setCliente = cliente => {
        console.log(cliente);
        this.setState({cliente})
    };

    handleChange = event => {
        const target = event.target,
                value = target.value,
                name = target.name;
    
        this.setState(prevState => ({
            cliente:{
                ...prevState.cliente,
                [name]: value
                }
            })
        )
    };

    salvar= () => {
        ClienteService.save(this.state.cliente)
            .then(res=> this.props.history.push(`/arearestrita/cliente`))
            .catch(err => console.log(err))
    };

    goBack= ()=>{
        this.props.history.goBack();
    };

    render() {
        const {state} = this;

        return (
            
            <div>
                <BarraAcoes routerBack={this.goBack}>
                    <div className="float-right m-1">
                        <button className="btn btn-sm btn-primary" onClick={this.salvar}>Salvar</button>
                    </div>
                </BarraAcoes>
            
                <div className="conteudo">
                    
                    
                    <ul className="nav nav-tabs mb-4" role="tablist">
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
                                <label className="col-form-label control-form-label">Razão Social:</label>
                                <div className="col-sm-4">
                                    <input type="text" 
                                        className="form-control form-control-sm" 
                                        onChange={this.handleChange} 
                                        value={state.cliente.rsocial || ""} 
                                        name="rsocial" 
                                        placeholder="Razão Social"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label control-form-label">Fantasia:</label>
                                <div className="col-sm-4">
                                    <input type="text" 
                                        className="form-control form-control-sm" 
                                        onChange={this.handleChange} 
                                        value={state.cliente.fantasia || ""} 
                                        name="fantasia" 
                                        placeholder="Fantasia" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label control-form-label">CNPJ:</label>
                                <div className="col-sm-2">
                                    <input type="text" 
                                        className="form-control form-control-sm" 
                                        onChange={this.handleChange} 
                                        value={state.cliente.cnpj || ""} 
                                        name="cnpj" 
                                        placeholder="CNPJ" />
                                </div>     
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label control-form-label">IE:</label>
                                <div className="col-sm-2">
                                    <input type="text" 
                                        className="form-control form-control-sm" 
                                        onChange={this.handleChange} 
                                        value={state.cliente.ie || ""} 
                                        name="ie" 
                                        placeholder="Insc. Estadual" />
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="contato">
                            <div className="form-group row">
                                <label className="col-form-label control-form-label">Telefone:</label>
                                <div className="col-sm-2">
                                    <input type="text" 
                                        className="form-control form-control-sm" 
                                        onChange={this.handleChange} 
                                        value={state.cliente.telefone || ""} 
                                        name="telefone" 
                                        placeholder="Telefone" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label control-form-label">Celular:</label>
                                <div className="col-sm-2">
                                    <input type="Tel" className="form-control form-control-sm"
                                        required
                                        onChange={this.handleChange} 
                                        value={state.cliente.celular || ""} 
                                        name="celular"
                                        placeholder="Celular"
                                        data-mask="(00) 0000-0000" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label control-form-label">Contato:</label>
                                <div className="col-sm-2">
                                    <input type="text" 
                                        className="form-control form-control-sm" 
                                        onChange={this.handleChange} 
                                        value={state.cliente.contato || ""} 
                                        name="contato" 
                                        placeholder="Contato na empresa" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label control-form-label">E-mail:</label>
                                <div className="col-sm-4">
                                    <input type="email" 
                                        className="form-control form-control-sm" 
                                        pattern=".+@globex.com"
                                        onChange={this.handleChange}
                                        value={state.cliente.email || ""} 
                                        name="email" 
                                        placeholder="Email" />
                                </div>
                            </div>
                        </div>



                        <div role="tabpanel" className="tab-pane fade" id="endereco">
                            <div className="form-group row">
                                <label className="col-form-label control-form-label">Endereço:</label>
                                <div className="col-sm-4">
                                    <input type="text" 
                                        className="form-control form-control-sm" 
                                        onChange={this.handleChange}
                                        value={state.cliente.endereco || ""}
                                        name="endereco"
                                        placeholder="Endereço" />
                                </div>
                            </div>
                            <div className="form-group row">   
                                <label className="col-form-label control-form-label">Nº:</label>
                                <div className="col-sm-2">
                                    <input type="text" 
                                        className="form-control form-control-sm" 
                                        onChange={this.handleChange} 
                                        value={state.cliente.enderecoNum || ""}  
                                        name="enderecoNum" 
                                        placeholder="Número" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label control-form-label">Bairro:</label>
                                <div className="col-sm-2">
                                    <input type="text"
                                        className="form-control form-control-sm"
                                        onChange={this.handleChange}
                                        value={state.cliente.bairro || ""}
                                        name="bairro"
                                        placeholder="Bairro" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label control-form-label">Cidade:</label>
                                <div className="col-sm-4">
                                    <select name="cidade"
                                        className="form-control form-control-sm"
                                        value={state.cliente.cidade? state.cliente.cidade : '' || ""}
                                        onChange={this.handleChange}>
                                        {state.cidades.map(data=> <option key={data.id} value={data.nome + ' - ' +data.microrregiao.mesorregiao.UF.sigla }>{data.nome} - {data.microrregiao.mesorregiao.UF.sigla} </option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>
            
                                        


        )
    }
}

export default ClienteForm;