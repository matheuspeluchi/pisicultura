import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import * as $ from 'jquery'
import EventEmitter from '../../services/EventService'

import logo from '../../assets/logo.png'
import {UserService} from '../../services/UserService'

window.jquery = window.$ = $

class HeaderMenu extends Component{

    static defaultProps = {
        userName: 'No User',
        user: null
    }
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            user: null
        }
    }

  


    toggleMenu(event){    
        event.preventDefault();
        $(".navTemplate").toggle('slow');
        
    }

    logout = () => {
        UserService.logout()
    }
    
   render(){
        const {state,props} = this;
        console.log(props.user)
        return (

            <div className="row-fluid menuSecundario menu">
                <div className="float-left">
                    <a className="navbar-brand text-center py-1 header-logo" href="#">
                        <img src={logo} className="align-self-start" width="40" height="40" />
                        <span className=" h5 my-2 py-2 ml-2">PisicAdmin</span>
                     </a>
                
                    <button onClick={this.toggleMenu.bind(this)} className="btn btn-link pb-2 mb-2">
                        <i className="fa fa-align-justify"></i>                                        
                    </button>
                </div>
                <div className="float-right p-1 ">
                    
                    <button className="btn btn-sm btn-link dropdown-toggle active userNameHeader" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-lg fa-user-circle mr-2 p-0"></i>   
                        {state.user ? state.user.displayName : 'No User'}
                    </button>
                    
                    <div className="dropdown-menu">
                        <button className="dropdown-item userNameHeader" onClick={this.logout}>Sair</button>
                    </div>

                    {
                        //UserService.isDeveloper()?
                        true ?
                            <Link to="/arearestrita" className="btn btn-sm btn-link active">
                                <i className="fa fa-cogs"></i>
                            </Link>
                        :''                    
                    }
                </div>
            </div>

        )
    }
}

export default HeaderMenu;