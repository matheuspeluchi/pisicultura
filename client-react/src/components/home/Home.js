import React, { Component } from 'react';
import Routes from '../../routes/routes';
import { Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import * as $ from 'jquery'
import { auth, provider } from '../../config/database'

import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import '../../stylesheets/header.css'
import '../../stylesheets/home.css'
import '../../stylesheets/menu.css'
import '../../stylesheets/styles.css'
import logo from '../../assets/logo.png'
import logoLogin from '../../assets/login_logo.png'

  




class HomeTemplate extends Component {

    constructor(props){
        super(props)
        
        this.state ={
            user: null
            
        }
    }
            
    useStyles = makeStyles({
        avatar: {
          margin: 0,
          width: 28,
          height: 28
        },
        bigAvatar: {
          margin: 10,
          width: 60,
          height: 60,
        },
      });
 
    login = () => {
        auth.signInWithPopup(provider)
            .then(({user}) =>{         
                console.log(user)       
                this.setState(({ user }))
            })
    }

    
    toggleMenu(event){    
        event.preventDefault();
        $(".navTemplate").toggle('slow');
        
    }

    logout = () => {
        this.setState({
            user: null
        })
    }


    render (){
        const {state} = this
        const classes = this.useStyles
        return (
            <React.Fragment>
                <CssBaseline />
                {state.user ?
                <div className="layout">
                    <header className="headerTemplate fixed-top">
                        <div className="row-fluid menuSecundario menu">
                            <div className="float-left">
                                <a className="navbar-brand text-center py-1 header-logo" href="#">
                                    <img src={logo} className="align-self-start" width="40" height="40" />
                                    <span className=" h5 my-2 py-2 ml-2">PisicAdmin</span>
                                </a>
                            
                                <button onClick={this.toggleMenu.bind(this)} className="btn btn-link pb-2 mb-2">
                                    <i className="fa fa-align-justify"></i>                                        
                                </button>
                            </div>
                            <div className="float-right p-1 ">
                                {state.user?
                                    <Avatar alt="Remy Sharp" src={state.user.photoURL} className={classes.avatar} />
                                    : null
                                }
                                <button className="btn btn-sm btn-link dropdown-toggle active userNameHeader" 
                                    type="button" 
                                    id="dropdownMenuButton" 
                                    data-toggle="dropdown" 
                                    aria-haspopup="true"                                     
                                    aria-expanded="false">  
                                    {state.user ? state.user.displayName : 'No User'}
                                </button>
                                
                                <div className="dropdown-menu">
                                    <button className="dropdown-item userNameHeader" onClick={this.logout}>Sair</button>
                                </div>

                                {
                                    //UserService.isDeveloper()?
                                    true ?
                                        <Link to="/arearestrita" className="btn btn-sm btn-link active">
                                            <i className="fa fa-cogs"></i>
                                        </Link>
                                    :''                    
                                }
                            </div>
                        </div>
                    </header>

                    {/* ******************** MENU PRINCIPAL ***********************************/}
                    <section className="sectionTemplate">
                        <nav className="navTemplate">
                            <div className="menuPrincipal">
                                <nav id="sidebar" className="bg-dark">
                                    <div className="sidebar-header m-1 p-1">
                                        <div>
                                            <div className="row">
                                                <div className="col-sm-2 ml-3 mr-2 px-0">
                                                {state.user?
                                                    <Avatar alt="Remy Sharp" src={state.user.photoURL} className={classes.avatar} />
                                                      : 
                                                        <i className="fa fa-3x fa-user-circle mr-0 p-0"></i>    
                                                } 
                                                </div>
                                                <div className="col-sm-8">
                                                    <div className="row">
                                                        <a  href="#" className="my-0 mr-2">Matheus Peluchi</a>
                                                    </div>
                                                    <div className="row">
                                                        Online
                                                    </div>                
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="my-0" />
                                    <div className="menu-title">
                                        <small className="ml-3">MENU DE NAVEGAÇÂO</small>
                                    </div>
                                    <hr className="my-0" />

                                    <ul className="list-unstyled components m-0 p-1">      
                                        
                                        <li className="active">
                                            <a href="#cadastros" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                                <i className="fa fa-book mr-2 "></i>
                                                Cadastros
                                            </a>
                                            <ul className="collapse list-unstyled" id="cadastros">
                                                <li>
                                                    <a href="#" className="before">
                                                        <i className="fa fa-genderless mr-3 mr-3" aria-hidden="true"></i>
                                                        Unidades
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-genderless mr-3" aria-hidden="true"></i>
                                                        Produtos
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-genderless mr-3" aria-hidden="true"></i>
                                                        Espécies
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <hr className="my-0" />
                                        <li>
                                            <a href="#ulAnalise" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                                <i className="fa fa-bar-chart mr-1" aria-hidden="true"></i>
                                                Análises
                                            </a>
                                            <ul className="collapse list-unstyled" id="ulAnalise">
                                                <li>
                                                    <a href="#" className="before">
                                                        <i className="fa fa-genderless mr-3" aria-hidden="true"></i>
                                                        Água
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-genderless mr-3" aria-hidden="true"></i>
                                                        Amônia
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-genderless mr-3" aria-hidden="true"></i>
                                                        Oxienio
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <hr className="my-0" />
                                        <li>
                                            <a href="#ulRelatorios" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                                <i className="fa fa-file-excel-o mr-1" aria-hidden="true"></i>
                                                Relatórios
                                            </a>
                                            <ul className="collapse list-unstyled" id="ulRelatorios">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-genderless mr-3" aria-hidden="true"></i>
                                                        Page 1</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-genderless mr-3" aria-hidden="true"></i>
                                                        Page 2                        
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-genderless mr-3" aria-hidden="true"></i>
                                                        Page 3</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <hr className="my-0" />
                                        <li>
                                            <a href="#">Portfolio</a>
                                        </li>
                                        <hr className="my-0" />
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                        <hr className="my-0" />
                                    </ul>
                                </nav>
                            </div>
                        </nav>
                        <article>
                            <Routes></Routes>
                        </article>
                    </section>
                    {/* ************************* MENU PRINCIPAL ******************************/}

                    {/* ***************************** RODAPE **********************************/}
                    <footer className="footerTemplate bg-withe ">
                        <div className="footer-copyright text-center py-1">© 2019 Copyright:
                            <a href="https://facebook.com/matheuspeluchi/"> Matheus Peluchi</a>
                        </div>  
                    </footer>
                
                </div>
                :
                    /* ******************** TELA DE LOGIN ***********************************/
                <div id="LOGIN">
                    <div id="fb-root"></div>
                    
                    
                    <div className="wrapper fadeInDown">
                        <div id="formContent">
                            <h2 style={{fontFamily:'Oregano', color:'#4169E1'}}>PisicAdmin</h2>
                            <div className="fadeIn first">
                            <img src={logoLogin} style={{width: '128px', height: '128px'}} id="icon" alt="User Icon" />
                            </div>

                            <br />

                            <button className="btn btn-danger btn-block" onClick={this.login}>
                                <i className="fa fa-google mr-3"></i>  Entra com Google
                            </button>
                                
                            
                            <br/>
                  
                        </div>
                    </div>
                </div>
        }
            </React.Fragment>

        )
    }
}

export default HomeTemplate;