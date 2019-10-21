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


function App() {
  return (
    <React.Fragment>
<header>

<MDBNavbar color="red" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong>Sundsvall Snickare</strong>
              </MDBNavbarBrand>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="about">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Profile</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
    <MDBView>
    <img src={image} className="img-fluid"alt="carpenter"/>
              
            <MDBMask overlay="light" className="flex-center flex-column text-white text-center">
              <h2>We are Sundsavll Snickare</h2>
              <h5>Let us build for you!</h5>
           
            </MDBMask>
            </MDBView>
</header>

<main>
          <MDBContainer className="text-center my-5">
            <p align="justify"> We can build whatever you desire for. Let us build your dream projects for you</p>
            <h1 align="justify">Thomas Granberg</h1>
            <h2 align="justify"> Mobile: 073-041 86 14</h2>
            <h2 align="justify"> E-mail: thomas.granberg@gmail.com</h2>
          </MDBContainer>
        </main>

</React.Fragment>
  );
}

export default App;
