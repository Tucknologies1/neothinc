import React, { Component } from "react";
import PortfolioCards from './Components/ColoredCard';
import { Container } from 'semantic-ui-react';
class Portfolio extends React.Component {
    render() {
        return (
            <div>
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