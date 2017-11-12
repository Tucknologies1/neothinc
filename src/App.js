import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Portfolio from './Pages/Portfolio';
import Faq from './Pages/Faq';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';
import Careers from './Pages/Careers';
import HeaderComponent from './Pages/Components/HeaderComponent';

import {Header} from 'semantic-ui-react';

import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="contentContainer">
                    <HeaderComponent/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about-us" component={AboutUs}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/FAQ" component={Faq}/>
                    <Route path="/services" component={Services}/>
                    <Route path="/contact-us" component={ContactUs}/>
                    <Route path="/careers" component={Careers}/>
                </div>
            </HashRouter>
        );
    }
}

export default App;
