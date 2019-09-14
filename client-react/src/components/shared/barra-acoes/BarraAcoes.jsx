import React, { Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { withStyles} from '@material-ui/styles';



const styles = theme => ({
    button: {
        margin: 5,
        marginLeft: 15
      
    },
  });
class BarraAcoes extends Component{
    
    constructor(props){
        super(props)
    }

    render(){      
        const { classes } = this.props;
        return  <div className="barra-acoes">
                    <div className="float-left">
                        <Button variant="contained" color="primary" className={classes.button}  onClick={this.props.routerBack}>
                            Voltar
                        </Button>
                        
                    </div>
                    {this.props.children}
                </div>
                
    }
}

  

export default withStyles(styles)(BarraAcoes)