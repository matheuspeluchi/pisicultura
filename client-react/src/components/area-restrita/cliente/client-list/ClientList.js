import React, {Component} from 'react'
import Lista from '../../../shared/lista/Lista';
import {ClienteService} from '../../../../services/ClienteService'

class ClienteLista extends Component {
    static defaultProps = {
        lista: [],
        columnDefs:[]
    }

    constructor(props){
        super(props)
        this.urlApi = 'http://localhost:3001/cliente';
        this.state = {
            lista: [],
            columnDefs: [
                {headerName:'Razão Social', field:'rsocial', filter: true, sortable: true},
                {headerName:'Fantasia', field:'fantasia', filter: true, sortable: true},
                {headerName:'CNPJ', field:'cnpj', filter: true, sortable: true},
                {headerName:'I.E', field:'ie', filter: true, sortable: true},
                {headerName:'Endereço', field:'endereco', filter: true, sortable: true},
                {headerName:'Número', field:'numero', filter: true, sortable: true},
                {namheaderNamee:'Bairro', field:'bairro', filter: true, sortable: true},
                {headerName:'Cidade', field:'cidade.nome', filter: true, sortable: true},
                
            ]            
        }
    }

    componentDidMount(){
      ClienteService.list()
        .then( res =>{
            this.setState({                    
                lista: res
            });
        })
    }
    componentWillUnmount() {
        this._isMounted = false;
      }
    
    render(){
        const {state} = this;
        
            return <Lista columns={state.columnDefs} rows={state.lista} />
     
            
    }
        
    
}

export default ClienteLista;