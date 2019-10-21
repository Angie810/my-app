import React from 'react';
import './App.css';
import {Link, Switch, Route} from 'react-router-dom'
import {Navbar, Form, Nav, Button, FormControl} from 'react-bootstrap'
import Shop from './components/Shop'
import Home from './components/Home'
import About from './components/About'
import { MDBCol,MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import image from './carpenter.jpg'
import homeIcon from './homeIcon.png'


function App() {
  return (
    <React.Fragment>
<Navbar bg="light" variant="light">
   
    <Nav className="mr-auto">
      <Link to="home" className="nav-link"><img src={homeIcon} width="25" height="25" /></Link>
      <Link to="about" className="nav-link">About</Link>
      <Link to="shop" className="nav-link">Shop</Link>
    </Nav>
   
  </Navbar>


<Switch>
<Route exact path="/home">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          
          
  </Switch>
</React.Fragment>
  );
}

export default App;
