import React, { Component } from 'react'

import '../stylesheets/login.css'
import Logo from '../assets/login_logo.png'
import {UserService} from '../services/UserService'
//import GoogleLogin from 'react-google-login'

class Login extends Component{

    constructor(props){
        super(props)

        this.state = {
            login:'',
            password:'',
            
        }
        this.login = this.login.bind(this)
    }    

    login = event => {
        event.preventDefault()
        UserService.login(this.state)
            .then(res =>res)
            .catch(err => err)
    }
    handleChange = event => {
        let target = event.target,
            value = target.value,
            name = target.name

        this.setState({
            [name]: value
        })
    }

    responseGoogle = response => {
        console.log(response);
      }


    render(){
        const {state} = this;

        return (
            <div>
                <div id="fb-root"></div>
                
                
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <h2 style={{fontFamily:'Oregano', color:'#4169E1'}}>PisicAdmin</h2>
                        <div className="fadeIn first">
                        <img src={Logo} style={{width: '128px', height: '128px'}} id="icon" alt="User Icon" />
                        </div>

                        <br />

                        <form>
                            <div className="p-2">
                                <input 
                                    className="form-control fadeIn second" 
                                    onChange = {this.handleChange}
                                    autoFocus
                                    placeholder="E-mail" 
                                    name='login'
                                    value={state.login} />
                            </div>
                            <div className="p-2">
                                <input 
                                type="password" 
                                className="form-control fadeIn third" 
                                onChange = {this.handleChange} 
                                placeholder="Senha" 
                                name='password' 
                                value={state.password} />                        
                            </div>

                            <button type="submit" className="btn btn-primary btn-block" onClick={this.login.bind(this)}>
                                Entrar
                            </button>
                            <br/>
                          

                            
                        </form>
                        <br/>
                        <div id="formFooter">
                            
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Login;