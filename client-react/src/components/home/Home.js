import React, { Component } from 'react';
import Routes from '../../routes/routes';

import HeaderMenu from './Header';
import MenuPrincipal from './Menu';
import '../../stylesheets/header.css'
import '../../stylesheets/home.css'
import '../../stylesheets/menu.css'
import '../../stylesheets/styles.css'


class HomeTemplate extends Component {
    

    render (){
        const {props} = this;
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
                {props.children}
            </div>
        )
    }
}

export default HomeTemplate;