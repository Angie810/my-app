import React from 'react';
import './App.css';
import {Link, Switch, Route} from 'react-router-dom'
import {Navbar, Form, Nav, Button, FormControl} from 'react-bootstrap'
import Shop from './components/Shop'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
      <React.Fragment>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="collapse navbar-collapse" id="navbarText">
     <ul className="navbar-nav mr-auto">
     <li className="nav-item active">
<Link exact path to="/">Home</Link></li>
<Link to="/about">About</Link>
</ul>
</div>
  <Switch>
  <Route path="/about">
  <About />
  </Route>
  <Route path="/shop">
  <Shop />
  </Route>
  <Route exact path="/">
  <Home />
  </Route>
  </Switch>
</nav>
      </React.Fragment>
  );
}

export default App;
