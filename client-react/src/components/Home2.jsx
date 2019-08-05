import React, {Component} from 'react';


class Home2 extends Component {



    render(){
        return (
             <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(página atual)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Ação</a>
                        <a className="dropdown-item" href="#">Outra ação</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Algo mais aqui</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Desativado</a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default Home2