import React, {Suspense, lazy} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Header from './Header'
import Footer from './Footer'
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux';
import {userLogin} from '../../redux/actions'
import { auth } from '../../config/database'
import { bindActionCreators } from 'redux';
import Loading from "../shared/loading";
const AreaRestrita = lazy(() => import('../area-restrita/AreaRestrita'));

const Conteudo = styled.div`  
        width: 100%;
        padding-left: 5px;
        @media (max-width: 768px) {
            .conteudo {
                width: 100%;
                padding-left: 5px;
            }
    `;

const GlobalStyle = createGlobalStyle`
    body {
        font-size: 13px !important;
        background-color: #E8E8E8 !important;
        
        .control-form-label {
            cursor: pointer;    
            font-weight: bold;
            width: 8rem;
            padding-right: 15px;
            padding-left: 15px;
            line-height: 1.5;
            text-align: right;
        }
        
        .dropdown-item {
            font-size: 13px;
        }
        
      
        @media (max-width: 768px) {
            .control-form-label {
                text-align: left;    
            }        
        }

    }
`;

class Home extends React.Component{

    componentDidMount(){
        const {history,userLogin} = this.props;

        auth.onAuthStateChanged(user => {
            if (user) {
                userLogin(user);
            }else{
                history.push('/login');
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
        const contexto =  props.match.url;
        return (

            <div>
                <GlobalStyle/>
                <Header user={props.user} logout={this.logout}></Header>
                <Conteudo>
                    <Suspense fallback={<Loading/>}>
                        <Switch>
                            <Route path='/arearestrita' component={AreaRestrita}/>
                        </Switch>
                    </Suspense>
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

