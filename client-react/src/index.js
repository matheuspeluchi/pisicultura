import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './include/bootstrap'
import {BrowserRouter} from 'react-router-dom';
import HomeTemplate from './components/home/Home';

ReactDOM.render(
    <BrowserRouter>
        <HomeTemplate />
    </BrowserRouter>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
