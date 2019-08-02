import React from 'react';
import {Switch, Route} from 'react-router-dom';


import HomeTemplate from './components/home/Home';
import Login from './components/login'

import './App.css';

function App(props) {

  return (
        <div>
          
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/" component={HomeTemplate}/>
            </Switch>
        
        </div> 
  );
}



export default App;
