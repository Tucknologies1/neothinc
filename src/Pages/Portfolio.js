import React, { Component } from "react";
import PortfolioCards from './Components/ColoredCard';
import { Container } from 'semantic-ui-react';
import SubHeader from './Components/SubHeader.js';

class Portfolio extends React.Component {
    render() {
        return (
            <div>
              <SubHeader/>
                <div className="portfolioContainer">
                    <Container>
                        <PortfolioCards />
                    </Container>
                </div>
            </div>
        );
    }
}

export default Portfolio
