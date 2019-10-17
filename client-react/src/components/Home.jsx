import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Routes from '../routes/Routes'
import {Switch} from 'react-router-dom'
import { connect } from 'react-redux';
import {userLogin} from  '../redux/actions'


class Home extends React.Component{


    static defaultProps = {
        user: null
    };

    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount(){

    }

 

    render(){
        const {state,props} = this;
        const {user} = this.props;
        return (

            <div>
                <Header user={user} login={this.login} logout={this.logout}></Header>
                <div className="conteudo">
                    {console.log(user)}
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

export default connect(mapStateToProps)(Home);

