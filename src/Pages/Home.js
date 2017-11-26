import React, { Component } from "react";
import { Container, Button } from 'semantic-ui-react';
import Header from './Components/Header.js';
import './Components/parts.css';
import { Card, Divider } from 'semantic-ui-react';
import ChatWindow from './Components/ChatWindow';
import ServiceCard from './ServiceCard';
import OurPartners from './OurPartners';
import Footer from './Components/Footer';

import socketIOClient from 'socket.io-client';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Endpoint for websocket connection local host
            endpoint: "http://192.168.1.11:9000"
        }
    }

    render() {
        // Web socket connection
        const socket = socketIOClient(this.state.endpoint);
        socket.on('news', function(data) {
            console.log(data);
        });

        return(
            <div>
                <div className="homeContainer">
                  <Header />
                  <ChatWindow />
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
                            <p>THiNC takes pride in building custom technology solutions for our clients. We believe that the best technology solves real problems. Our products are designed to make your life better, make your business more effective, and achieve your goals.</p>
                        </div>
                        {/* Link this button to something */}
                        <Button className = "servicesBtn" circular size="massive">
                            Learn More
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
                        <hr className ="lineClient"/>
                    </div>
                    <OurPartners />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home
