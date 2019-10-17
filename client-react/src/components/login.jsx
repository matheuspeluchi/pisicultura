import React, { Component } from 'react'


import { auth, provider } from '../config/database'

import '../stylesheets/login.css'
import Logo from '../assets/login_logo.png'
import {UserService} from '../services/UserService'
import { connect } from 'react-redux';
import {userLogin} from  '../redux/actions'
import { bindActionCreators } from 'redux';


class Login extends Component{


    constructor(props){
        super(props);

        this.state = {
            login:'',
            password:'',
            user: null
            
        }
    
    }    

    login = event => {
        event.preventDefault();
        UserService.login(this.state)
            .then(res =>res)
            .catch(err => err)
    };

    loginGoogle = event => {
        event.preventDefault();
        const {history} = this.props;
        auth.signInWithPopup(provider)
            .then(({user}) =>{
                const {userLogin} = this.props;
                userLogin(user);
                history.push('/');
                console.log(this.props.user)
            })
            
    };

    
    handleChange = event => {
        let target = event.target,
            value = target.value,
            name = target.name;

        this.setState({
            [name]: value
        })
    };


    render(){
        const {state,props} = this;
    
        return (
            <div>
                <div id="fb-root"></div>
                {console.log(props.user)}
                
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
                          
                            <button className="btn btn-primary btn-block" onClick={this.loginGoogle.bind(this)}>
                                Entre com sua conta Google
                            </button>
                            
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
const mapStateToProps = store => ({
    user: store.userState.newValue
});
const mapDispatchToProps = dispatch => bindActionCreators({userLogin},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);