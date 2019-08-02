import React, {Component} from 'react'
import {Link} from 'react-router-dom'


import Lista from '../../shared/lista/Lista.jsx';
import {ClienteService} from '../../../services/ClienteService'
import BarraAcoes from '../../shared/barra-acoes/BarraAcoes.jsx'
import EventEmitter from '../../../services/EventService'

class ClienteLista extends Component {
    static defaultProps = {
        lista: [],
        columnDefs:[]
    }

    constructor(props){
        super(props)
        this.urlApi = 'http://localhost:3001/cliente';
        this.state = {
            clienteId: null,
            lista: [],
            columnDefs: [
                {headerName:'Razão Social', field:'rsocial', filter: true, sortable: true},
                {headerName:'Fantasia', field:'fantasia', filter: true, sortable: true},
                {headerName:'CNPJ', field:'cnpj', filter: true, sortable: true},
                {headerName:'I.E', field:'ie', filter: true, sortable: true},
                {headerName:'Endereço', field:'endereco', filter: true, sortable: true},
                {headerName:'Número', field:'enderecoNum', filter: true, sortable: true},
                {namheaderNamee:'Bairro', field:'bairro', filter: true, sortable: true},
                {headerName:'Cidade', field:'cidade.nome', filter: true, sortable: true},
                
            ]            
        }
        this.selectClient = this.selectClient.bind(this);
    }

    selectClient = (cliente) =>{
        console.log(cliente)
        this.props.history.push(`/arearestrita/cliente/visualizar/${cliente._id}`)
    }

    componentDidMount(){
        ClienteService.list()
            .then( res => this.setState({lista: res}))

        EventEmitter.on('selectedData', this.selectClient)  
        
    }

    componentWillUnmount(){
        EventEmitter.removeListener('selectedData', this.selectClient)
    }
    
    render(){
        const {state,props} = this;
        
            return (
                    <div>
                        <BarraAcoes>
                            <div className="float-right">
                                <Link to={`${props.match.url}/novo`} className="btn btn-sm btn-primary m-1">
                                    Novo
                                </Link>
                            </div>
                        </BarraAcoes>
                        
                        <Lista columns={state.columnDefs} rows={state.lista} />
                        
                        
                    </div>
            )
            
    }
        
    
}

export default ClienteLista;