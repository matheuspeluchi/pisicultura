import React from "react";
import styled from "styled-components";


const DivLoading = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-image: url('../images/default.gif');
    background-repeat: no-repeat;
    background-color: #FFF;
    background-position: center;

`;

class Loading extends React.Component {

    render(){
        return  <div className="spinner-border" style={style} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
    }
}

export default Loading;