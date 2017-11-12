import React, { Component } from "react";
import { Container, Button } from 'semantic-ui-react';
import HeaderComponent from '../Pages/Components/HeaderComponent';
import HeaderImage from './Components/HeaderImage';
class Home extends React.Component {
    render() {
        return(
            <div>
                <HeaderComponent />
                <div className="homeContainer">
                    <Container textAlign='center'>
                    <h1>THiNC TECHNOLOGY</h1>
                    <h2>WEB MOBILE SOFTWARE</h2>
                    <Button className="getStartedButton">
                        Get Started
                    </Button>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Home
