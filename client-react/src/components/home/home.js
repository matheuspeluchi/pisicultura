import React, { Component } from 'react';

import HeaderMenu from '../header/Header';
import MenuPrincipal from '../menu/menu';
import FooterHome from '../footer/footer';
import './home.css';
import ClienteLista from '../area-restrita/cliente/client-list/ClientList';


class HomeTemplate extends Component {

    render (){
        return <div className="wrapper">
                    <HeaderMenu />
                    
                    <MenuPrincipal />
                    
                    <div id="content">
                      
                      <ClienteLista />
                      
                    </div>
                    <FooterHome />
                    
                    
                </div>
    }
}

export default HomeTemplate;