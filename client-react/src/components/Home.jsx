import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Routes from '../routes/Routes'
import {Switch} from 'react-router-dom'
import EventEmitter from '../services/EventService'

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
      //  EventEmitter.on("LoginSuccess",)

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

export default Home;

