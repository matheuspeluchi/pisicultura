import React, { Component} from 'react';

class BarraAcoes extends Component{

    render(){      

        return  <div className="barra-acoes fixed-top">
                    {this.props.children}
                </div>
                
    }
}

export default BarraAcoes;