import React from 'react';
import {Switch, Route} from 'react-router-dom';


import Home2 from './components/Home';
import Login from './components/login'

import './App.css';

function App(props) {

  return (
        <div>
          
            <Switch>
                
                <Route path="/" component={Home2}/>
            </Switch>
        
        </div> 
  );
}



export default App;
