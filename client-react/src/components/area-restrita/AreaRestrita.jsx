import React, { Component } from 'react';
import ImgCliente from '../../assets/images/company.png'
import ImgGrupo from '../../assets/images/group-icon-blue.png'
import { Link } from 'react-router-dom'

class AreaRestrita extends Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };

   
  }

  render() {
    const ImgStyle = {
        width: '8rem',
        align: 'center'
    }
    return (
        <div>
            <div className="row mx-1 mt-5">
                
                <Link to="/arearestrita/cliente" className="m-1">
                    <div className="card">
                        <div className="card-header">
                            <h6 className="card-subtitle mb-2 text-muted text-center">Clientes</h6>
                        </div>
                        
                        <img className="card-img-top rounded mx-auto d-block" src={ImgCliente} style={ImgStyle} alt="Imagem de capa do card" />
                    </div>
                </Link>



                <a className="m-1">
                    <div className="card">
                        <div className="card-header">
                            <h6 className="card-subtitle mb-2 text-muted text-center">Grupos</h6>
                        </div>
                        <img className="card-img-top rounded mx-auto d-block" src={ImgGrupo}  style={ImgStyle} alt="Imagem de capa do card" />
                    </div>
                </a>

            </div>

        </div>
    )
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default AreaRestrita;
