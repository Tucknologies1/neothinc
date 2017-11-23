import React, { Component } from "react";
import PortfolioCards from './Components/ColoredCard';
import { Container } from 'semantic-ui-react';
import SubHeader from './Components/SubHeader.js';
import Footer from './Components/Footer';
import Particlez from './Components/Particlez';
class Portfolio extends React.Component {
    render() {
        return (
            <div>
              {/* <SubHeader/> */}
               <div className="headerBanner">
                    <Particlez />
                    <div>
                        <h1 id="bannerFont">PORTFOLIO</h1>
                    </div>
                </div>
                <div className="portfolioContainer">
                    <Container>
                        <PortfolioCards />
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Portfolio
