import React, {Component} from 'react';
import {ClienteService} from '../../../services/ClienteService';
import ClienteLista from './ClientList';

class ClienteHome extends Component{

    constructor(props){
        super(props)

        this.state = {
            cliente: null,
            clientes: null
        }
    }

    componentDidMount() {
        ClienteService.list() 
            .then(cliente =>{
                console.log(cliente)
                this.setState({cliente})
            } )
    }


    render(){
        return (
            <ClienteLista lista= {this.state.cliente}></ClienteLista>
        )
    }
}

export default ClienteHome