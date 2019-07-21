import React,{Component} from 'react';

class MenuPrincipal extends Component {

    render(){
    return  <div className="menuPrincipal">
                <nav id="sidebar" className="bg-dark">
                    <div className="sidebar-header m-1 p-1">
                        <div>
                            <div className="row">
                                <div className="col-sm-2 ml-3 px-0">
                                    <i className="fa fa-3x fa-user-circle mr-0 p-0"></i>    
                                </div>
                                <div className="col-sm-8">
                                    <div className="row">
                                        <a  href="#" className="my-0 mr-2">Matheus Peluchi</a>
                                    </div>
                                    <div className="row">
                                        Online
                                    </div>                
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="my-0" />
                    <div className="menu-title">
                        <small className="ml-3">MENU DE NAVEGAÇÂO</small>
                    </div>
                    <hr className="my-0" />

                    <ul className="list-unstyled components m-0 p-1">      
                        
                        <li className="active">
                            <a href="#cadastros" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <i className="fa fa-book mr-2 "></i>
                                Cadastros
                            </a>
                            <ul className="collapse list-unstyled" id="cadastros">
                                <li>
                                    <a href="#" className="before">
                                        <i className="fa fa-genderless mr-3 mr-3" aria-hidden="true"></i>
                                        Unidades
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-genderless mr-3" aria-hidden="true"></i>
                                        Produtos
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-genderless mr-3" aria-hidden="true"></i>
                                        Espécies
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <hr className="my-0" />
                        <li>
                            <a href="#ulAnalise" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <i className="fa fa-bar-chart mr-1" aria-hidden="true"></i>
                                Análises
                            </a>
                            <ul className="collapse list-unstyled" id="ulAnalise">
                                <li>
                                    <a href="#" className="before">
                                        <i className="fa fa-genderless mr-3" aria-hidden="true"></i>
                                        Água
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-genderless mr-3" aria-hidden="true"></i>
                                        Amônia
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-genderless mr-3" aria-hidden="true"></i>
                                        Oxienio
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <hr className="my-0" />
                        <li>
                            <a href="#ulRelatorios" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <i className="fa fa-file-excel-o mr-1" aria-hidden="true"></i>
                                Relatórios
                            </a>
                            <ul className="collapse list-unstyled" id="ulRelatorios">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-genderless mr-3" aria-hidden="true"></i>
                                        Page 1</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-genderless mr-3" aria-hidden="true"></i>
                                        Page 2                        
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-genderless mr-3" aria-hidden="true"></i>
                                        Page 3</a>
                                </li>
                            </ul>
                        </li>
                        <hr className="my-0" />
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <hr className="my-0" />
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <hr className="my-0" />
                    </ul>
                </nav>
            </div>
    }

}

export default MenuPrincipal;