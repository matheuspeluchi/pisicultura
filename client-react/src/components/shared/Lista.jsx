import React, { Component} from 'react'
import styled from "styled-components";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-blue.css';

const List = styled.div`
    width: 100%;
    background-color: #E8E8E8 !important;
`;

class Lista extends Component {

    static defaultProps ={
        columns: [],
        rows:[],
        autoHeight: true,      
        onRowClick: () =>{}
    };

    constructor(props){
        super(props);
        
        this.state = {
            columns: this.props.columns,
            rows: this.props.rows,
            gridHeight: '300px'
        };
        
        this.getWindowHeight = this.getWindowHeight.bind(this);
    }

    rowClick=() => {     
        this.props.onRowClick(this.gridApi.getSelectedRows()[0])   
        
    };

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };

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
            
                <List className="ag-theme-blue p-2" style={{height: state.gridHeight}}>
                    <AgGridReact
                        rowSelection = 'single'                  
                        columnDefs={props.columns}
                        rowData={props.rows}
                        onGridReady={this.onGridReady}
                        onRowClicked={this.rowClick}>
                    </AgGridReact>
                </List>
            
        ) 
    }
}

export default Lista;