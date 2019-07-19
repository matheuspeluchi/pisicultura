import React, {Component} from 'react';

import BarraAcoes from '../../../shared/barra-acoes/BarraAcoes'
import {ClienteService} from '../../../../services/ClienteService'

class ClienteForm extends Component {
    
    
    static defaultProps = {
        onSubmit: ()=> {}
    }

    constructor(props){
        
        super(props);

        this.state = {
            
            rsocial: '',
            fantasia: '',
            cnpj: '',
            ie: '',
            endereco: '',
            numero: '',
            bairro: '',
            cidade: '',
        
        }
        this.handleChange = this.handleChange.bind(this);
        this.salvar = this.salvar.bind(this);
    
        this.style = {
            paddingTop: '85px',
            position: 'flex',
            
        }
    }

    componentDidMount(){
        if (this.props.match.params.clienteId){
            ClienteService.get(this.props.match.params.clienteId) 
                .then(res =>{                    
                    this.setState({
                        ...res.data
                    })
                })
        }
    }



    handleChange(event){
        const target = event.target,
                value = target.value,
                name = target.name;

        this.setState({
            [name]: value
        })
    }

    salvar (data){
        ClienteService.post(data._id,data)
            .then(res=>{
                this.props.history.push(`/arearestrita/cliente`)
            })
    }

    render() {
        const {state,props} = this;

        return (
            <div>
                <BarraAcoes>
                    <div className="float-right m-1">
                        <button className="btn btn-sm btn-primary m-1" onClick={this.salvar.bind(this,state)}>Salvar</button>
                    </div>
                </BarraAcoes>

                <div style={this.style}>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Razão Social:</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" onChange={this.handleChange} value={state.rsocial} name="rsocial" placeholder="Razão Social"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Fantasia:</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" onChange={this.handleChange} value={state.fantasia} name="fantasia" placeholder="Fantasia" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">CNPJ:</label>
                        <div className="col-sm-2">
                            <input type="text" className="form-control" onChange={this.handleChange} value={state.cnpj} name="cnpj" placeholder="CNPJ" />
                        </div>     
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">IE:</label>
                        <div className="col-sm-2">
                            <input type="text" className="form-control" onChange={this.handleChange} value={state.ie} name="ie" placeholder="Insc. Estadual" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Endereço:</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" onChange={this.handleChange} value={state.endereco} name="endereco" placeholder="Endereço" />
                        </div>
                        <label className="col-form-label">Nº:</label>
                        <div className="col-sm-2">
                            <input type="text" className="form-control" onChange={this.handleChange} value={state.numero}  name="numero" placeholder="Número" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Bairro:</label>
                        <div className="col-sm-2">
                            <input type="text" className="form-control" onChange={this.handleChange} value={state.bairro} name="bairro" placeholder="Bairro" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Cidade:</label>
                        <div className="col-sm-2">
                            <select name="cidade" name="cidade"  className="form-control" onChange={this.handleChange}>
                                <option value=''></option>
                                <option value='Dourados'>Dourados</option>
                                <option value='Maracaju'>Maracaju</option>
                            </select>
                        </div>
                    </div>



                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Cidade:</label>
                        <div className="col-sm-2">
                            <select name="cidade" name="cidade"  className="form-control" onChange={this.handleChange}>
                                <option value=''></option>
                                <option value='Dourados'>Dourados</option>
                                <option value='Maracaju'>Maracaju</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Cidade:</label>
                        <div className="col-sm-2">
                            <select name="cidade" name="cidade"  className="form-control" onChange={this.handleChange}>
                                <option value=''></option>
                                <option value='Dourados'>Dourados</option>
                                <option value='Maracaju'>Maracaju</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Cidade:</label>
                        <div className="col-sm-2">
                            <select name="cidade" name="cidade"  className="form-control" onChange={this.handleChange}>
                                <option value=''></option>
                                <option value='Dourados'>Dourados</option>
                                <option value='Maracaju'>Maracaju</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Cidade:</label>
                        <div className="col-sm-2">
                            <select name="cidade" name="cidade"  className="form-control" onChange={this.handleChange}>
                                <option value=''></option>
                                <option value='Dourados'>Dourados</option>
                                <option value='Maracaju'>Maracaju</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Cidade:</label>
                        <div className="col-sm-2">
                            <select name="cidade" name="cidade"  className="form-control" onChange={this.handleChange}>
                                <option value=''></option>
                                <option value='Dourados'>Dourados</option>
                                <option value='Maracaju'>Maracaju</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Cidade:</label>
                        <div className="col-sm-2">
                            <select name="cidade" name="cidade"  className="form-control" onChange={this.handleChange}>
                                <option value=''></option>
                                <option value='Dourados'>Dourados</option>
                                <option value='Maracaju'>Maracaju</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Cidade:</label>
                        <div className="col-sm-2">
                            <select name="cidade" name="cidade"  className="form-control" onChange={this.handleChange}>
                                <option value=''></option>
                                <option value='Dourados'>Dourados</option>
                                <option value='Maracaju'>Maracaju</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Cidade:</label>
                        <div className="col-sm-2">
                            <select name="cidade" name="cidade"  className="form-control" onChange={this.handleChange}>
                                <option value=''></option>
                                <option value='Dourados'>Dourados</option>
                                <option value='Maracaju'>Maracaju</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Cidade:</label>
                        <div className="col-sm-2">
                            <select name="cidade" name="cidade"  className="form-control" onChange={this.handleChange}>
                                <option value=''></option>
                                <option value='Dourados'>Dourados</option>
                                <option value='Maracaju'>Maracaju</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Cidade:</label>
                        <div className="col-sm-2">
                            <select name="cidade" name="cidade"  className="form-control" onChange={this.handleChange}>
                                <option value=''></option>
                                <option value='Dourados'>Dourados</option>
                                <option value='Maracaju'>Maracaju</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Cidade:</label>
                        <div className="col-sm-2">
                            <select name="cidade" name="cidade"  className="form-control" onChange={this.handleChange}>
                                <option value=''></option>
                                <option value='Dourados'>Dourados</option>
                                <option value='Maracaju'>Maracaju</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Cidade:</label>
                        <div className="col-sm-2">
                            <select name="cidade" name="cidade"  className="form-control" onChange={this.handleChange}>
                                <option value=''></option>
                                <option value='Dourados'>Dourados</option>
                                <option value='Maracaju'>Maracaju</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Cidade:</label>
                        <div className="col-sm-2">
                            <select name="cidade" name="cidade"  className="form-control" onChange={this.handleChange}>
                                <option value=''></option>
                                <option value='Dourados'>Dourados</option>
                                <option value='Maracaju'>Maracaju</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Cidade:</label>
                        <div className="col-sm-2">
                            <select name="cidade" name="cidade"  className="form-control" onChange={this.handleChange}>
                                <option value=''></option>
                                <option value='Dourados'>Dourados</option>
                                <option value='Maracaju'>Maracaju</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label">Cidade:</label>
                        <div className="col-sm-2">
                            <select name="cidade" name="cidade"  className="form-control" onChange={this.handleChange}>
                                <option value=''></option>
                                <option value='Dourados'>Dourados</option>
                                <option value='Maracaju'>Maracaju</option>
                            </select>
                        </div>
                    </div>






                </div>
            </div>    
        )
    }
}

export default ClienteForm;