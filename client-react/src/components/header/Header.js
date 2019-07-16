import React,{Component} from 'react';
import './header.css';
import logo from '../../assets/logo.png';


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
    
    render(){
        const {props} = this;
        return <div>
            <div className="menuSecundario m-0 p-0">
                <nav className="navbar navbar-expand-sm bg-primary navbar-dark fixed-top ">
                    
                    <a className="navbar-brand text-center py-1" href="#">
                        <img src={logo} className="align-self-start" width="40" height="40" />
                        <span className=" h5 my-2 py-2 ml-2">PisicAdmin</span>
                    </a>
                    
                    <ul className="navbar-nav" id="userHeaderMenu">
                    
                        <li className="nav-item dropdown active">
                            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                <i className="fa fa-lg fa-user-circle m-0 p-0"></i>   
                                {props.userName}
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Sair</a>
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