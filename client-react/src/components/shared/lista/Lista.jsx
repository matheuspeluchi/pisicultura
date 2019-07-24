import React, { Component} from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-blue.css';
import { Channel } from '../../../services/EventService'


class Lista extends Component {

    static defaultProps ={
        columns: [],
        rows:[],
        autoHeight: true
    }

    constructor(props){
        super(props);
        
        this.state = {
            columns: this.props.columns,
            rows: this.props.rows,
            gridHeight: '300px'
        }
        
        this.getWindowHeight = this.getWindowHeight.bind(this);
    }

    rowClick(){        
        Channel.emit('selectedData',this.gridApi.getSelectedRows()[0])
    }

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    getWindowHeight(){      
        return (document.body.clientHeight -85)
    }

    componentDidMount(){
        if(this.props.autoHeight){
            this.setState({
                gridHeight: `${this.getWindowHeight()}px`
            })
        }
    }

    render (){
        const {props, state } = this;
        
        return (
            
                <div className="ag-theme-blue lista p-2" style={{height: state.gridHeight}}>                    
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