import React from 'react';
import {Switch, Route} from 'react-router-dom';


import HomeTemplate from './components/Home';
import Login from './components/login'

import './App.css';

function App(props) {

  return (
        <div>
          
            <Switch>
                
                <Route path="/" component={HomeTemplate}/>
            </Switch>
        
        </div> 
  );
}



export default App;
