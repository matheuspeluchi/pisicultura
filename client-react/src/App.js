import React,{ Component } from 'react';
import {Switch, Route} from 'react-router-dom'


import Home from './components/Home';
import Login from './components/login';
import NotFound from "./components/shared/NotFound";

class App extends Component {

  render(){

    return (
          <Switch>

              <Route path="/home" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path='*' component={NotFound} />

          </Switch>

    )
  }
}




export default App;
