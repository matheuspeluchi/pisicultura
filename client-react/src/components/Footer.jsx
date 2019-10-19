import React, {Component} from 'react'
import styled from "styled-components";


const Rodape = styled.footer`
     height: 30px;
     background-color:white;
     border-top: 1px solid lightgray
    `;
class Footer extends Component{

    render(){
        return  <Rodape className="footerTemplate bg-withe fixed-bottom ">
                    <div className="footer-copyright text-center py-1">© 2019 Copyright:
                        <a href="https://facebook.com/matheuspeluchi/"> Matheus Peluchi</a>
                    </div>  
                </Rodape>
    }
}


export default Footer