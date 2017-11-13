import React, { Component } from "react";
import { Container, Button } from 'semantic-ui-react';
import Header from './Components/Header.js';
import './Components/parts.css';
import { Card, Divider } from 'semantic-ui-react';

import ServiceCard from './ServiceCard';
import OurPartners from './OurPartners';
import Footer from './Components/Footer';

class Home extends React.Component {
    state = {
      typing: true,
    }
    done = () => {
      this.setState({ typing: false }, () => {
        this.setState({ typing: true })
      });
    }
    render() {
        return(
            <div>
                <div className="homeContainer">
                  <Header />
                </div>
                {/* <div className="blogBox">
                    Insert Blog Information Component here
                    <Button className="blogBoxBtn">
                        Blog Updates
                    </Button>
                </div> */}
            <div className="homeContainerTwo">
                <div className="leftServiceContainer">
                    <div className = "homeTwoTitle">
                        <h1>OUR</h1>
                        <h2>SERVICES</h2>
                        <div className = "servicesDesc">
                            <p>WE HAVE THE BEST SHIT HERE </p>
                        </div>
                        <Button className = "servicesBtn">
                            Get Started
                        </Button>
                    </div>
                </div>
                <div className="rightServiceContainer">
                    {/* TODO: Cards go here */}
                    <ServiceCard />
                </div>
            </div>
                <div className="homeContainerThree">
                    <div className="partnerTitle">
                        <h1>OUR CLIENTS</h1>
                        <hr class="lineClient"/>
                    </div>
                    <OurPartners />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home
