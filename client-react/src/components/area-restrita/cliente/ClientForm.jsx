import React, {Component} from 'react';

import BarraAcoes from '../../shared/barra-acoes/BarraAcoes.jsx'
import {ClienteService} from '../../../services/ClienteService'
import { CidadeService } from '../../../services/CidadeService'

class ClienteForm extends Component {
    
    
    static defaultProps = {
        onSubmit: ()=> {}
    }

    constructor(props){
        
        super(props);

        this.state = {
            cliente:{
                rsocial: '',
                fantasia: '',
                cnpj: '',
                ie: '',
                endereco: '',
                numero: '',
                bairro: '',
                cidade: ''
            },
            cidades:[],
        
        
        }
        this.handleChange = this.handleChange.bind(this);
        this.salvar = this.salvar.bind(this);
    
        
    }

    componentDidMount(){
        if (this.props.match.params.clienteId){
            ClienteService.get(this.props.match.params.clienteId) 
                .then(res =>{                                     
                    this.setState({
                        cliente:res.data,
                        isLoading: false
                    })
                })
        }
        
        CidadeService.get()
            .then(res => {
                this.setState({cidades: res.data})
            })
                
    }
    

    handleChange(event){
        const target = event.target,
                value = target.value,
                name = target.name;

        this.setState(prevState => ({
           cliente:{
               ...prevState.cliente,
               [name]: value
           }
        }))
    }

    salvar (data){
        ClienteService.save(data._id,data)
            .then(res=> this.props.history.push(`/arearestrita/cliente`))
            .catch(err => console.log(err))
    }

    render() {
        const {state} = this;

        return (
            
            <div>
                <BarraAcoes>
                    <div className="float-right m-1">
                        <button className="btn btn-sm btn-primary" onClick={this.salvar.bind(this,state.cliente)}>Salvar</button>
                    </div>
                </BarraAcoes>
            
                <div className="conteudo">
                    <div className="form-group row">
                        <label className="col-form-label control-form-label">Razão Social:</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control form-control-sm" onChange={this.handleChange} value={state.cliente.rsocial} name="rsocial" placeholder="Razão Social"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-form-label control-form-label">Fantasia:</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control form-control-sm" onChange={this.handleChange} value={state.cliente.fantasia} name="fantasia" placeholder="Fantasia" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-form-label control-form-label">CNPJ:</label>
                        <div className="col-sm-2">
                            <input type="text" className="form-control form-control-sm" onChange={this.handleChange} value={state.cliente.cnpj} name="cnpj" placeholder="CNPJ" />
                        </div>     
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label control-form-label">IE:</label>
                        <div className="col-sm-2">
                            <input type="text" className="form-control form-control-sm" onChange={this.handleChange} value={state.cliente.ie} name="ie" placeholder="Insc. Estadual" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-form-label control-form-label">Endereço:</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control form-control-sm" onChange={this.handleChange} value={state.cliente.endereco} name="endereco" placeholder="Endereço" />
                        </div>
                        <label className="col-form-label">Nº:</label>
                        <div className="col-sm-2">
                            <input type="text" className="form-control form-control-sm" onChange={this.handleChange} value={state.cliente.numero}  name="numero" placeholder="Número" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-form-label control-form-label">Bairro:</label>
                        <div className="col-sm-2">
                            <input type="text" className="form-control form-control-sm" onChange={this.handleChange} value={state.cliente.bairro} name="bairro" placeholder="Bairro" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-form-label control-form-label">Cidade:</label>
                        <div className="col-sm-4">
                            <select name="cidade" className="form-control form-control-sm" value={state.cliente.cidade._id} onChange={this.handleChange}>
                                {state.cidades.map(data=> <option key={data._id} value={data._id}>{data.nome} </option>)}
                            </select>
                        </div>
                    </div>

                </div>
            </div>    
        )
    }
}

export default ClienteForm;