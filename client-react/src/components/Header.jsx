import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import logo from '../assets/login_logo.png'
import {userLogin} from  '../redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Avatar = styled.img `
    vertical-align: middle;
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

class Header extends Component {

    static defaultProps = {
        user: null,
        login: ()=>{
        },
        logout: () =>{

        }
    };


    render(){
        const {props} = this;

        return (
             <nav className="navbar navbar-expand-lg py-0 navbar-dark menu-principal py-md-0">
                <a className="navbar-brand"  href="/#">
                    <img src={logo} alt="PisicAdmin" style={{height:40, width:100}} className="img-fluid img-thumbnai logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse mp-0" id="conteudoNavbarSuportado">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">Home <span className="sr-only">(página atual)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Cadastros
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/#">Unidades</a>
                                <a className="dropdown-item" href="/#">Espécies</a>
                                <a className="dropdown-item" href="/#">Produtos</a>
                            <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/#">Clientes</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Operações
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/#">Nova Operação</a>
                                <a className="dropdown-item" href="/#">Visualizar Operações</a>
                            <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/#">Algo mais aqui</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/arearestrita" className="nav-link" href="/#">Área Restrita</Link>
                        </li>
                    </ul>


                    {props.user ?
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <Avatar className="avatar mr-2" src={props.user.photoURL} />
                                    {props.user.displayName}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/#" onClick={props.logout}>Sair</a>
                                </div>
                            </li>
                        </ul>
                        : ''
                    }

                </div>
                
            </nav>

            
        )
    }
}

const mapStateToProps = store => ({
    user: store.userState.newValue
});
const mapDispatchToProps = dispatch => bindActionCreators({userLogin},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);