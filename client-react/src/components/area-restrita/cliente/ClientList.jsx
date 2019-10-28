import React, {Component} from 'react'

import Lista from '../../shared/Lista.jsx';
import BarraAcoes from '../../shared/BarraAcoes.jsx'
import { ClienteService } from '../../../services/ClienteSistemaService.js';


class ClienteLista extends Component {
    static defaultProps = {
        lista: [],
        columnDefs:[]
    };

    constructor(props){
        super(props);
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
                {headerName:'Cidade', field:'cidade', filter: true, sortable: true},
                
            ]   ,
            cliente: null         
        }
    
    }

    componentDidMount(){
        ClienteService.list()
            .then(lista => this.setState({lista}))
            .catch(err => console.log(err))
    }


    selecionarCliente = cliente =>{
        this.props.history.push(`${this.props.match.url}/novo/${cliente.id}`)
    };

    novoCliente = () => {
        this.props.history.push(`${this.props.match.url}/novo`)
    };

    goBack= () => {
        this.props.history.goBack();
    };

    render(){
        const {state} = this;
        
        return (
                <div>
                    <BarraAcoes routerBack={this.goBack}>
                        <div className="float-right">
                            <button className="btn btn-sm btn-primary mt-2"  onClick={this.novoCliente}>
                                Novo
                            </button>
                        </div>
                    </BarraAcoes>

                    <Lista columns={state.columnDefs} rows={state.lista} onRowClick= {this.selecionarCliente}/>

                </div>
        )
            
    }
        
    
}

export default ClienteLista;
