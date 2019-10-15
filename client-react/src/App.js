import React,{ Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import { auth, provider } from './config/database'
import { connect } from 'react-redux';
import Home from './components/Home';
import Login from './components/login';
import './stylesheets/styles.css'
import mapStateToProps from "react-redux/es/connect/mapStateToProps";

class App extends Component {

  constructor(props){
    
    super(props);
    
    this.state = {
      user: null
    }
  }

  login = () => {
    auth.signInWithPopup(provider)
        .then(({user}) =>{         
            console.log(user);
            this.setState(({ user }))
        })
  };

  logout = () => {
    auth.signOut()
    .then(()=>{
      this.setState({
          user: null

      })
    })
  };

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
        if (user) {
            this.setState({ user })
        }
    })
  }

  render(){
    const { newValue } = this.props;
    return (

          <div>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/login" component={Login}/>
              </Switch>
          </div>
    )
  }
}

const mapStateToProps = store => ({
    newValue: store.newValue
});




export default connect(mapStateToProps) (App);
