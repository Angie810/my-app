import React from 'react';
import { Link } from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import './Shop.css'

 const ShopNavbar = ()=>{
    return(
        <Navbar bg="light" variant="primary" id="nav">
                <Nav className="mr-auto">
                  
                        <li className="nav-item"><Link to="/cart" className="nav-Link">My cart</Link></li>
                        <li className="nav-item"><Link to="/cart" className="nav-Link"><i className="fas fa-shopping-cart"></i></Link></li>
              
                </Nav>
            </Navbar>  
    )
}

export default ShopNavbar;