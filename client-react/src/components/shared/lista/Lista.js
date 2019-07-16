import React, { Component} from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-blue.css';
import BarraAcoes from '../barra-acoes/barra-acoes';


class Lista extends Component {

    static defaulProps ={
        columns: [],
        rows:[],
    }

    constructor(props){
        super(props);

        
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
        return  <div 
                    className="ag-theme-blue"
                    style={{ 
                    height: '90%', 
                    width:'100%'}} 
                    >
                    <BarraAcoes />
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