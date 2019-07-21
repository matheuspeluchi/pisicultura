import React, { Component} from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-blue.css';
import { Channel } from '../../../services/EventService'


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
        Channel.emit('selectedData',this.gridApi.getSelectedRows()[0])
    }

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    render (){
        const {props } = this;
        return (
                <div className="ag-theme-blue lista px-2">                    
                    <AgGridReact
                        rowSelection = 'single'                  
                        columnDefs={props.columns}
                        rowData={props.rows}
                        onGridReady={this.onGridReady}
                        onRowClicked={this.rowClick.bind(this)}>
                    </AgGridReact>
                </div>
        ) 
    }
}

export default Lista;