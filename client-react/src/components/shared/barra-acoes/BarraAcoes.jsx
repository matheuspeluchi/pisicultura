import React, { Component} from 'react';

class BarraAcoes extends Component{

    render(){      

        return  <div className="barra-acoes">
                    {this.props.children}
                </div>
                
    }
}

export default BarraAcoes;