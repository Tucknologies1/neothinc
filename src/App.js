import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Portfolio from './Pages/Portfolio';
import Faq from './Pages/Faq';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';

import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
class App extends Component {
  render() {
    return (
        <HashRouter>
          <div>
            <div className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about-us">About Us</NavLink></li>
              <li><NavLink to="/portfolio">Portfolio</NavLink></li>
              <li><NavLink to="/FAQ">FAQ</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/contact-us">Contact</NavLink></li>
            </div>
            <div className="contentContainer">
              <Route exact path="/" component={Home}/>
              <Route path="/about-us" component={AboutUs}/>
              <Route path="/portfolio" component={Portfolio}/>
              <Route path="/FAQ" component={Faq}/>
              <Route path="/services" component={Services}/>
              <Route path="/contact-us" component={ContactUs}/>
            </div>
          </div>
        </HashRouter>
    );
  }
}

export default App;
