import React, { Component } from "react";
import head from './head.svg';
import gear from './gear.svg';
import './parts.css';

require('./js/Typewriter.js');

class Header extends React.Component {

    render() {
        return(
            <div className="Icon-Header">
              <img src={head} className="Head-Icon" alt="Head" />
              <img src={gear} className="Gear-Icon" alt="Gear" />
              <a href="" className="typewrite" data-period='[ "technology", "mobile applications", "web development"]'>
                <span className="wrap"></span>
              </a>
            </div>
        );
    }
}

export default Header
