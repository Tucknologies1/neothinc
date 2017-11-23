import React, { Component } from "react";
import { Container, Button } from 'semantic-ui-react';
import Particlez from '../Components/Particlez';
import Typist from 'react-typist';
import Logo from './Logo.js';
import './parts.css';
import { Card, Divider } from 'semantic-ui-react';

class Header extends React.Component {
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
          <div className="Header-Container">
          <Particlez />
            <div className="Header-Content">
              <Container textAlign='center'>
                <span className="Type-Header">
                  <h1 className="Thinc-Header">
                    {this.state.typing
                      ? <Typist onTypingDone={this.done}>
                      THiNC.
                      <span className="Typed-Word">WEB</span>
                      <Typist.Backspace count={3} delay={1500} />
                      <span className="Typed-Word">MOBILE</span>
                      <Typist.Backspace count={6} delay={1500} />
                      <span className="Typed-Word">SOFTWARE</span>
                      <Typist.Backspace count={8} delay={2000} />
                      <span className="Typed-Word">TECHNOLOGY</span>
                      <Typist.Backspace count={16} delay={3000} />
                      </Typist> : ''
                    }
                  </h1>
                </span>
                <Button className="getStartedButton" circular size="massive">
                  Get Started
                </Button>
              </Container>
            </div>
          </div>
        );
      }
}

export default Header
