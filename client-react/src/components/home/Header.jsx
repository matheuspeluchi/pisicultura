import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import logo from '../../assets/login_logo.png'
import {userLogin} from '../../redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Avatar = styled.img `
    vertical-align: middle;
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

const Logo = styled.img`
    height: 40px;
    width: 100px;
    background-color: #3c8dbc
`;

const Nav = styled.nav `
    height: 40px !important;
    max-height: 40px;
    color: white !important;
    z-index: 1200;
    background-color: #3c8dbc !important;
    font-size: 13px !important;
    .nav-link {
        color: white !important;
        font-weight: 500;
      
    }
    .nav-item {
        max-height: 40px;
    }
    #navbarSupportedContent{
        max-height: 40px;
    }
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
             <Nav className="navbar navbar-expand-lg py-0 navbar-dark bg-primary py-md-0">
                <Link to={"/"} className="navbar-brand" >
                    <Logo src={logo} alt="PisicAdmin" style={{height:30, width:100}} className="img-fluid bg-primary" />
                </Link>
                <button className="btn btn-sm navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="btn btn-sm  navbar-toggler-icon mb-3"></span>
                </button>

                <div className="collapse navbar-collapse bg-primary" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto bg-primary">
                        <li className="nav-item active">
                            <Link to={"/home"} className="nav-link">
                                Home
                            </Link>
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
                                Comercial
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/#">Orçamentos</a>
                                <a className="dropdown-item" href="/#">Vendas</a>
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
                    </ul>


                    {props.user ?
                        <ul className="navbar-nav ml-auto bg-primary mb-2">
                            <li className="nav-item dropdown mt-0 pt-0">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <Avatar className="avatar mr-2" src={props.user.photoURL} />
                                    {props.user.displayName}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/#" onClick={props.logout}>Sair</a>
                                    <Link to="/arearestrita" className="dropdown-item" >Área Restrita</Link>
                                </div>
                            </li>
                        </ul>
                        : ''
                    }

                </div>
                
            </Nav>

            
        )
    }
}

const mapStateToProps = store => ({
    user: store.userState.newValue
});
const mapDispatchToProps = dispatch => bindActionCreators({userLogin},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);