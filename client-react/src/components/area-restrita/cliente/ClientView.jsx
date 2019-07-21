import React, { Component } from 'react';

import { ClienteService } from '../../../services/ClienteService';


class ClienteView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cliente: {}
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
                 <div className="form-group row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Razão Social</label>
                    <div className="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={state.cliente.rsocial} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ClienteView;