import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
class HeaderComponent extends React.Component {
render() {
    return(
        <div>
            <Header size="huge" className="header">
                <div className="title">
                Thinc Icon
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
        </div>
        );
    }
}

export default HeaderComponent;