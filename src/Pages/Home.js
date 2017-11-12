import React, { Component } from "react";
import { Container, Button } from 'semantic-ui-react';
class Home extends React.Component {
    render() {
        return(
            <div className="homeContainer">
                <Container textAlign='center'>
                <h1>THiNC TECHNOLOGY</h1>
                <h2>WEB MOBILE SOFTWARE</h2>
                <Button>
                    Get Started
                </Button>
                </Container>
            </div>
        );
    }
}

export default Home