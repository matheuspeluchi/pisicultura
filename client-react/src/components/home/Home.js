import React, { Component } from 'react';
import HeaderMenu from '../header/Header';
import MenuPrincipal from '../menu/Menu';
import FooterHome from '../footer/Footer';
import './home.css';
import Routes from '../../routes/routes';



class HomeTemplate extends Component {

    render (){
        return <div className="wrapper">
                    <HeaderMenu />
                    
                    <MenuPrincipal />
                    
                    <div id="content">
                        <Routes />
                    </div>
                    <FooterHome />
                    
                    
                </div>
    }
}

export default HomeTemplate;