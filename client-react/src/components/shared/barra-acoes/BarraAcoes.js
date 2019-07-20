import React, { Component} from 'react';

class BarraAcoes extends Component{

    constructor(props){
        super(props);
    }


    render(){      

        return  <div className="fixed top mb-3" id="acoes-barras" >
                    {this.props.children}
                </div>
                
    }
}

export default BarraAcoes;