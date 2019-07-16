import React, {Component} from 'react'

class ClienteLista extends Component{

    constructor(props){
        super(props)
        this.urlApi = 'http://localhost:3001/cliente';
        this.state = {
            lista: [],
            columnDefs: []
        }
        this.getClients = this.getClients.bind(this);
    }

    getClients(){
        fetch(this.urlApi)
            .then(res => res.json())
            .then(res =>{
                this.setState({
                    lista: res
                })
            })

    }
}