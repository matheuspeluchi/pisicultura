import React, { Component} from 'react';
import './barra-acoes.css'

class BarraAcoes extends Component{

    constructor(props){
        super(props);

        this.state = {

        }

    }


    render(){      

        return  <div className="fixed top mb-3" id="acoes-barras">

                    <div className="float-left">
                        <button className="btn btn-secondary m-1">Btn1</button>
                        <button className="btn btn-secondary m-1">Btn</button>
                        <button className="btn btn-secondary m-1">Btn</button>
                        <button className="btn btn-secondary m-1">Btn</button>
                    </div>

                    <div className="float-right">
                        <button className="btn btn-secondary m-1">Btn</button>
                        <button className="btn btn-secondary m-1">Btn</button>
                        <button className="btn btn-secondary m-1">Btn</button>
                        <button className="btn btn-secondary m-1">Btn</button>
                    </div>
                    
                </div>
    }
}

export default BarraAcoes;