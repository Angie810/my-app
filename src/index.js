import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);



ReactDOM.render(<BrowserRouter basename="/my-app/"><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));

