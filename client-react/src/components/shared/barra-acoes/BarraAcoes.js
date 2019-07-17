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
                    {this.props.children}
                </div>
                
    }
}

export default BarraAcoes;