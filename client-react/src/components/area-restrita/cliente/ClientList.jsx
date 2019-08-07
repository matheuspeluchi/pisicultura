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
                {headerName:'Cidade', field:'cidadeId', filter: true, sortable: true},
                
            ]            
        }
    
    }

    render(){
        const {state,props} = this;
        
            return (
                    <div>
                        <BarraAcoes>
                            <div className="float-right">
                                <Link to={`arearestrita/cliente/novo`} className="btn btn-sm btn-primary m-1">
                                    Novo
                                </Link>
                            </div>
                        </BarraAcoes>
                        
                        <Lista columns={state.columnDefs} rows={props.lista} />
                        
                        
                    </div>
            )
            
    }
        
    
}

export default ClienteLista;