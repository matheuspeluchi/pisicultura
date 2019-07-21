import React, { Component } from 'react'
import './login'

class login extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div class="wrapper fadeInDown">
                <div id="formContent">


                    <div class="fadeIn first">
                        <img src="../../../assets/images/client-icon-blue.png" style="width: 64px; height: 64px;" id="icon" alt="User Icon" />
                    </div>

                    <br />

                    <form >
                        <div class="p-2">
                          <input class="form-control fadeIn second" placeholder="E-mail"  autofocus formControlName="login" />                        
                        </div>
                        <div class="p-2">
                            <input type="password" class="form-control fadeIn third" placeholder="Senha" formControlName="password" />                        
                        </div>

                        <button type="submit" class="btn btn-primary btn-block" >
                            Entrar
                        </button>

                    </form>

                    <div id="formFooter">
                        <a class="underlineHover" href="#">Forgot Password?</a>
                    </div>
                    

                </div>
            </div>

        )
    }
}

export default login;