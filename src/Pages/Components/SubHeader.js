import React, { Component } from "react";
import { Container, Button } from 'semantic-ui-react';
import Particles from 'react-particles-js';
import Typist from 'react-typist';
import './parts.css';

class SubHeader extends React.Component {
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
          <div className="Header-Container Sub-Header">
            <div className="Header-Content Sub-Header">
              <Container textAlign='center'>
                <span className="Type-Header">
                  <h1 className="Thinc-Header">
                    {this.state.typing
                      ? <Typist onTypingDone={this.done}>
                      THiNC.
                      <span className="Typed-Word">WEB</span>
                      <Typist.Backspace count={3} delay={1200} />

                      <span className="Typed-Word">MOBILE</span>
                      <Typist.Backspace count={6} delay={1200} />

                      <span className="Typed-Word">SOFTWARE</span>
                      <Typist.Backspace count={8} delay={1800} />

                      <span className="Typed-Word">TECHNOLOGY</span>
                      <Typist.Backspace count={16} delay={2500} />
                      </Typist> : ''
                    }
                  </h1>
                </span>
              </Container>
            </div>
          </div>
        );
      }
}

export default SubHeader
