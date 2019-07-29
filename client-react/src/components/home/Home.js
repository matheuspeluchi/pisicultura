import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Routes from '../../routes/routes';

import HeaderMenu from './Header';
import MenuPrincipal from './Menu';
import '../../stylesheets/header.css'
import '../../stylesheets/home.css'
import '../../stylesheets/menu.css'
import '../../stylesheets/styles.css'
import {UserService} from '../../services/UserService'


class HomeTemplate extends Component {

    constructor(props){
        super(props)
    }


    componentWillMount(){
        if(!UserService.isAuthenticated()){
            window.location = '/login'
        }
    }


    render (){
    
        return (
            <div className="layout">
                <header className="headerTemplate fixed-top">
                    <HeaderMenu></HeaderMenu>
                </header>
                <section className="sectionTemplate">
                    <nav className="navTemplate">
                        <MenuPrincipal></MenuPrincipal>                    
                    </nav>
                    <article>
                        <Routes></Routes>
                    </article>
                </section>
                <footer className="footerTemplate bg-withe ">
                    <div className="footer-copyright text-center py-1">© 2019 Copyright:
                        <a href="https://facebook.com/matheuspeluchi/"> Matheus Peluchi</a>
                    </div>  
                </footer>
            
            </div>
        )
    }
}

export default HomeTemplate;