import React, { Component } from 'react';
import HeaderMenu from './header/Header';
import MenuPrincipal from './menu/Menu';
import FooterHome from './footer/Footer';
import './home.css';
import Routes from '../../routes/routes';



class HomeTemplate extends Component {

    render (){
        return (
            <div className="layout">
                <header>
                    <HeaderMenu />
                </header>
                <section>
                    <div id="menuPrincipal">
                        <MenuPrincipal />
                    </div>
                    <div id="conteudoPrincipal">
                        <Routes />
                    </div>
                    <footer>
                        <FooterHome />
                    </footer>
                </section>        
            </div>
        )
    }
}

export default HomeTemplate;