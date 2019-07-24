import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import * as $ from 'jquery'

window.jquery = window.$ = $

class HeaderMenu extends Component{

    static defaultProps = {
        userName: 'No User'
    }
    constructor(props){
        super(props);
        this.state = {
            userName: 'Matheus Peluchi'
        }
    }

    toggleMenu(event){    
        event.preventDefault();
        $(".navTemplate").toggle('slow');
        
    }
    
    render(){
        
        return (
            <nav className="navbar navbar-expand-sm navbar-dark menu p-0 menuSecundario d-flex">
                
                    
                        <a className="navbar-brand text-center py-1 header-logo" href="#">
                            <div className="float-left pl-4">
                                <img src={logo} className="align-self-start" width="40" height="40" />
                                <span className=" h5 my-2 py-2 ml-2">PisicAdmin</span>
                            </div>                            
                        </a>
                    
                        <button type="button" id="sidebarCollapse" onClick={this.toggleMenu.bind(this)} className="btn btn-sm" style={{color:'white'}} >
                            <span className="navbar-toggler-icon"></span>                                        
                        </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav" id="userHeaderMenu">
                        
                            <li className="nav-item dropdown active">
                                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    <i className="fa fa-lg fa-user-circle mr-2 p-0"></i>   
                                    {this.state.userName}
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Sair</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="/arearestrita" className="nav-link active">
                                    <i className="fa fa-cogs"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                
            </nav>
        )
    }
}

export default HeaderMenu;