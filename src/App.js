import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Portfolio from './Pages/Portfolio';
import Faq from './Pages/Faq';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';

import { Header } from 'semantic-ui-react';

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
              <Header size="huge" className="header">
              <div className="title">
                Thinc Technology
              </div>
              <div className="headerLinks">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about-us">About Us</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/FAQ">FAQ</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact-us">Contact</NavLink>
              </div>
              </Header>
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
