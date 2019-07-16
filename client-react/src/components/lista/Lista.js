import React, { Component} from 'react'
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Lista extends Component {

    constructor(props){
        super(props);

        this.state ={
            columnDefs: [],
            rowData: []
        }
    }

    render (){
      return    <div className="ag-theme-balham" style={{height: '500px', width: '600px' }} >
                    <AgGridReact columnDefs={this.state.columnDefs} rowData={this.state.rowData}> </AgGridReact>
                </div>
    }
}

export default Lista;