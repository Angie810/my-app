import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'



ReactDOM.render(<BrowserRouter basename="/my-app/"><App /></BrowserRouter>, document.getElementById('root'));

