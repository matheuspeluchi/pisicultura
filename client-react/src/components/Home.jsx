import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Routes from '../routes/Routes'
import {Switch} from 'react-router-dom'
import { connect } from 'react-redux';
import {userLogin} from  '../redux/actions'
import { auth } from '../config/database'
import { bindActionCreators } from 'redux';

class Home extends React.Component{


    static defaultProps = {
        user: null
    };

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const {history,userLogin} = this.props;
        auth.onAuthStateChanged(user => {
            if (user) {
                userLogin(user);
            }
        })
        if (this.props.user == null){
            Window.location = "/login"
        }
    }

    logout = () => {
        const {userLogin, history} = this.props;
        auth.signOut()
        .then(()=>{            
            userLogin(null);
            history.push('/login');
        })
    }

    render(){
        const {state,props} = this;
        return (
        
            <div>
                <Header user={props.user} login={this.login} logout={this.logout}></Header>
                <div className="conteudo">
                    <Switch>                
                        <Routes></Routes>
                    </Switch>
                </div>
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

