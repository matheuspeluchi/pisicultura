import React,{ Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import { auth, provider } from './config/database'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './routes/Routes'
import './stylesheets/styles.css'

class App extends Component {

  constructor(props){
    
    super(props)
    
    this.state = {
      user: null
    }
  }

  login = () => {
    auth.signInWithPopup(provider)
        .then(({user}) =>{         
            console.log(user)       
            this.setState(({ user }))
        })
  }

  logout = () => {
      this.setState({
          user: null

      })
  }


  render(){
    
    return (
          <div>
              <Header user={this.state.user} login={this.login} logout={this.logout}></Header>
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




export default App;
