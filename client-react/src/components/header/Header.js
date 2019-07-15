import React,{Component} from 'react';
import './header.css'

class HeaderMenu extends Component{
    render(){
        return <div>
            <div className="menuSecundario m-0 p-0">
                <nav className="navbar navbar-expand-sm bg-primary navbar-dark fixed-top ">
                    
                    <a className="navbar-brand text-center" href="#">
                        <img src="../../assets/logo.png" className="align-self-start" width="40" height="40" />
                        <span className=" h5 my-2 py-2 ml-2">PisicAdmin</span>
                    </a>
                    
                    <ul className="navbar-nav" id="userHeaderMenu">
                    
                        <li className="nav-item dropdown active">
                            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                <i className="fa fa-lg fa-user-circle m-0 p-0"></i>   
                                Matheus Peluchi
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" onClick="" href="#">Sair</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link active">
                                <i className="fa fa-cogs"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    }
}

export default HeaderMenu;