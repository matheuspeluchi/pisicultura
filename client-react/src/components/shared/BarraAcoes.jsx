import React, { Component} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Barra = styled.div `
    width: 100%;
    height: 50px;
    position: relative;
    z-index: 10;
    background-color: #E8E8E8;
    border-bottom: 1px solid lightgray;
    padding-right: 10px;
    padding-left: 5px;

`;


class BarraAcoes extends Component{



    goBack = () =>{
        this.props.history.goBack();
    };

    render(){
        return(
            <Barra className="barra-acoes">
                <div className="float-left">
                    <button className="btn btn-sm mt-2 btn-default"  onClick={this.props.routerBack}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>

                </div>
                {this.props.children}
            </Barra>
        )
    }
}

  

export default BarraAcoes