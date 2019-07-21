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
            <div className="layout">
                <header className="fixed-top">
                    <HeaderMenu/>
                </header>
                <section>
                    <nav>
                        <MenuPrincipal />
                    </nav>
                    <article>
                         <Routes></Routes>
                    </article>
                </section>
                <footer>
                    <FooterHome />
                </footer>
                </div>
        )
    }
}

export default HomeTemplate;