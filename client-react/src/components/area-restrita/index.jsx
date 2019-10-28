import React, { Component} from "react";
import {Link} from "react-router-dom";
import ImgCliente from "../../assets/images/company.png";
import ImgGrupo from "../../assets/images/group-icon-blue.png";

class AreaRestritaIndex extends Component {

    render(){
        const {props} = this;
        const contexto =  props.match.url;
        const ImgStyle = {
            width: '8rem',
            align: 'center'
        };
        return(
            <div className="row mx-1 mt-4">

                <Link to={`${contexto}/cliente`} className="m-1">
                    <div className="card">
                        <div className="card-header">
                            <h6 className="card-subtitle mb-2 text-muted text-center">Clientes</h6>
                        </div>

                        <img className="card-img-top rounded mx-auto d-block" src={ImgCliente} style={ImgStyle} alt="Imagem de capa do card" />
                    </div>
                </Link>


                <Link to={`${contexto}/cliente`} className="m-1">
                    <div className="card">
                        <div className="card-header">
                            <h6 className="card-subtitle mb-2 text-muted text-center">Usuarios</h6>
                        </div>
                        <img className="card-img-top rounded mx-auto d-block" src={ImgGrupo}  style={ImgStyle} alt="Imagem de capa do card" />
                    </div>
                </Link>
            </div>
        )
    }

}

export default AreaRestritaIndex;