import React, { Component} from 'react';

class BarraAcoes extends Component{

    constructor(props){
        super(props);
    }


    render(){      

        return  <div className="barra-acoes bg-light">
                    {this.props.children}
                </div>
                
    }
}

export default BarraAcoes;