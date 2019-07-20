import React, { Component } from 'react';
import Routes from '../../routes/routes';

import HeaderMenu from './header/Header';
import MenuPrincipal from './menu/Menu';
import FooterHome from './footer/Footer';
import './home.css';

class HomeTemplate extends Component {
    constructor(props){
        super(props);
    }
    render (){
        const {props} = this;
        return (
            <div>
                <div className="headerTemplate">
                    <HeaderMenu />
                </div>
                <div className="sidebarTemplate">
                    <MenuPrincipal />   
                </div>
                <div className="conteudoTemplate">
                    <Routes></Routes>
                </div>
                <div className="footerTemplate">
                    <FooterHome />
                </div>

            </div>
        )
    }
}

export default HomeTemplate;