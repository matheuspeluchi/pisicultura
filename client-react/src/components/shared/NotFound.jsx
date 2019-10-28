import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'

const ErrorTemplate = styled.div `
  padding: 40px 15px;
  text-align: center;
`;

const ErrorActions = styled.div `
  margin-top:15px;
  margin-bottom:15px;
`;

class NotFound extends Component{

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ErrorTemplate className="error-template">
                            <h1>
                                Oops!</h1>
                            <h2>
                               Erro 404</h2>
                            <div className="error-details">
                                Desculpe, a página solicitada não foi encontrada!
                            </div>
                            <ErrorActions>
                                <Link to={"/home"} className="btn btn-primary btn-lg">
                                    <FontAwesomeIcon  icon={faHome} className={"mr-2"}/>
                                    Voltar para o Inicio
                                </Link>
                            </ErrorActions>
                        </ErrorTemplate>
                    </div>
                </div>
            </div>

        )
    }
}

export default NotFound;