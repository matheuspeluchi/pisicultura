import React, {Component} from 'react';

import './clienteForm.css'

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
        this.urlApi = 'http://localhost:3001/cliente';
        this.getClients();

    }

    handleChange(event){
        const target = event.target,
                value = target.value,
                id = target.id;

        this.setState({
            [id]: value
        })
    }

    getClients(){
        fetch(this.urlApi)
            .then(res => res.json())
            .then(res => console.log(res))
            
    }

    salvar (event){
        event.preventDefault();
    }

    render() {
        const {state} = this;

        return <div>
                    <form className="pt-3" onSubmit={this.salvar}>
                        <div className="form-group row">
                            <label className="col-sm-1 col-form-label">Razão Social:</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" onChange={this.handleChange} value={state.rsocial} id="rsocial" placeholder="Razão Social"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-1 col-form-label">Fantasia:</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" onChange={this.handleChange} value={state.fantasia} id="fantasia" placeholder="Fantasia" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-1 col-form-label">CNPJ:</label>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" onChange={this.handleChange} value={state.cnpj} id="cnpj" placeholder="CNPJ" />
                            </div>     
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-1 col-form-label">IE:</label>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" onChange={this.handleChange} value={state.ie} id="ie" placeholder="Insc. Estadual" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-1 col-form-label">Endereço:</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" onChange={this.handleChange} value={state.endereco} id="endereco" placeholder="Endereço" />
                            </div>
                            <label className="col-form-label">Nº:</label>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" onChange={this.handleChange} value={state.numero}  id="numero" placeholder="Número" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-1 col-form-label">Bairro:</label>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" onChange={this.handleChange} value={state.bairro} id="bairro" placeholder="Bairro" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-1 col-form-label">Cidade:</label>
                            <div className="col-sm-2">
                                <select name="cidade" id="cidade"  className="form-control" onChange={this.handleChange}>
                                    <option value=''></option>
                                    <option value='Dourados'>Dourados</option>
                                    <option value='Maracaju'>Maracaju</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit">Salvar</button>
                    </form>
               </div>

    }
}

export default ClienteForm;