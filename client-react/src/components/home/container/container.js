import React from 'react'
import styles from  './container.css'


class Container extends React.Component {

    constructor(props){
        super(props)
    }
                    
    render(){
        return (
            <div className="conteudo">
                
                {this.props.children}
            </div>
        )
    }
}


export default Container;