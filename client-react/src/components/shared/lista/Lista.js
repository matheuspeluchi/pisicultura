import React, { Component} from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-blue.css';
import './barra-acoes.css'


class Lista extends Component {

    static defaulProps ={
        columns: [],
        rows:[],
    }

    constructor(props){
        super(props);
        
        this.state = {
            columns: this.props.columns,
            rows: this.props.rows
        }
        
    }

    rowClick(){
        console.log(this.gridApi.getSelectedRows()[0])
    }

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    render (){
        const {props } = this;
        return  <div className="ag-theme-blue" style={{ height: '80%', width:'100%'}} >
                    <div className="fixed top mb-3" id="acoes-barras">

                        <div className="float-left">
                            <button className="btn btn-sm btn-link m-1"><i class="fa fa-arrow-left"></i></button>
                        
                        </div>

                        <div className="float-right">
                            <button className="btn btn-sm btn-primary m-1">Novo</button>
                            
                        </div>

                    </div>
                    
                    <AgGridReact
                        rowSelection = 'single'                  
                        columnDefs={props.columns}
                        rowData={props.rows}
                        onGridReady={this.onGridReady}
                        onSelectionChanged={this.rowClick.bind(this)}>
                    </AgGridReact>
                </div>
    }
}

export default Lista;