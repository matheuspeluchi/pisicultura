import React from 'react';
import styled from 'styled-components';
import Header from './Header'
import Footer from './Footer'
import Routes from '../routes/Routes'
import {Switch} from 'react-router-dom'
import { connect } from 'react-redux';
import {userLogin} from  '../redux/actions'
import { auth } from '../config/database'
import { bindActionCreators } from 'redux';

const Conteudo = styled.div`  
        width: 100%;
        padding-left: 5px;
    `;

class Home extends React.Component{


    componentDidMount(){
        const {history,userLogin} = this.props;

        auth.onAuthStateChanged(user => {
            if (user) {
                userLogin(user);
            }else{
                history.push('/login');
                console.log(this.props.user)
            }
        });

    }

    logout = () => {
        const {userLogin, history} = this.props;
        auth.signOut()
        .then(()=>{            
            userLogin(null);
            history.push('/login');
        })
    };

    render(){
        const {props} = this;
        return (

            <div>
                <Header user={props.user} login={this.login} logout={this.logout}></Header>
                <Conteudo>
                    <Switch>                
                        <Routes></Routes>
                    </Switch>
                </Conteudo>
                <Footer></Footer>
            </div>           

        )
    }
}

const mapStateToProps = store => ({
    user: store.userState.newValue
});
const mapDispatchToProps = dispatch => bindActionCreators({userLogin},dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);

