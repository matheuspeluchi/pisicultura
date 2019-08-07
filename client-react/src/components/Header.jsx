import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import logo from '../assets/login_logo.png'


class Header extends Component {

    defaulprops = {
        user: null,
        login: ()=>{
        },
        logout: () =>{

        }
    }
    constructor(props){
        super(props)

        this.state ={
            user: null,
            anchorEl: null,
            stateMenu: false
        }
    }

    styles= {
        root: {
            flexGrow: 1,
            height: 45,
            padding:0
            
        },
        menuButton: {
            marginRight: 2,
        },
        title: {
            flexGrow: 1,
        },
        avatar: {
            margin: 10,
        },
    };    

    
    userMenuClick = event =>{
        console.log(event.currentTarget)
        this.setState({
            stateMenu: true,
            anchorEl: event.target
        })
    }
    userMenuClose = () => {
        this.setState({
            stateMenu: false
        })
    }
    

    render(){
        const {props, state} = this
        const classes = this.styles
        return (
             <nav className="navbar navbar-expand-lg navbar-light menu-principal">
                <a className="navbar-brand"  href="/#">
                    <img src={logo} alt="PisicAdmin" style={{height:40, width:100}} className="img-fluid img-thumbnai logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse mp-0" id="conteudoNavbarSuportado">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/#">Home <span className="sr-only">(página atual)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Cadastros
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/#">Unidades</a>
                            <a className="dropdown-item" href="/#">Espécies</a>
                            <a className="dropdown-item" href="/#">Produtos</a>
                        <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/#">Clientes</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Operações
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/#">Nova Operação</a>
                            <a className="dropdown-item" href="/#">Visualizar Operações</a>
                        <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/#">Algo mais aqui</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/arearestrita" className="nav-link" href="/#">Área Restrita</Link>
                    </li>
                    </ul>
                    {props.user?
                            <div className="row mr-1">
                                <Avatar alt="Remy Sharp" size="small" src={props.user.photoURL} style={classes.avatar} />
                                <Button color="inherit"
                                    onClick = {this.userMenuClick}
                                    aria-controls="user-menu" 
                                    aria-haspopup="true"
                                    size="small"
                                >
                                    {props.user.displayName}
                                </Button>
                                <Menu
                                    id="user-menu"
                                    anchorEl={state.anchorEl}
                                    keepMounted
                                    open={state.stateMenu}
                                    onClose={this.userMenuClose}
                                    size="small"
                                >
                                    <MenuItem size="small" onClick={props.logout}>Logout</MenuItem>
                                </Menu>
                            </div>
                            : 
                            <Button color="inherit"
                                onClick = {props.login}
                                size="small"
                            > 
                                Login
                            </Button>    
                    }
                </div>
            </nav>

            
        )
    }
}

export default Header