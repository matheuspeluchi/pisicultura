import React, { Component } from 'react';

import HeaderMenu from '../header/Header';
import MenuPrincipal from '../menu/menu';
import FooterHome from '../footer/footer';
import './home.css';
import ClienteForm from '../area-restrita/cliente/cliente-form/ClienteForm';

class HomeTemplate extends Component {

    render (){
        return <div className="wrapper">
                    <HeaderMenu />
                    
                    <MenuPrincipal />
                    
                    <div id="content">
                      
                      <ClienteForm />
                      
                    </div>
                    <FooterHome />
                    
                    
                </div>
    }
}

export default HomeTemplate;