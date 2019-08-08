import React, { Component} from 'react';
import Button from '@material-ui/core/Button';
import { withStyles} from '@material-ui/styles';



const styles = theme => ({
    button: {
        margin: 5,
        marginLeft: 15
      
    },
  });
class BarraAcoes extends Component{
    
    render(){      
        const { classes } = this.props;
        return  <div className="barra-acoes">
                    <div className="float-left">
                        <Button variant="contained" color="primary" className={classes.button}  onClick={window.history.back}>
                            Voltar
                        </Button>
                        
                    </div>
                    {this.props.children}
                </div>
                
    }
}

  

export default withStyles(styles)(BarraAcoes)