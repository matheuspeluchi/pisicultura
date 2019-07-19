import React, { Component } from 'react';
import Routes from '../../routes/routes';

import HeaderMenu from './header/Header';
import MenuPrincipal from './menu/Menu';
import FooterHome from './footer/Footer';
import './home.css';
import Container from './container/container';



class HomeTemplate extends Component {
    constructor(props){
        super(props);
    }
    render (){
        const {props} = this;
        return (
            <div>
                <HeaderMenu />
                <MenuPrincipal />   
                <Container>
                    <Routes></Routes>
                </Container>
                <FooterHome />

            </div>
        )
    }
}

export default HomeTemplate;