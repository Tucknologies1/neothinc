import React, {Component} from 'react'
import { Icon } from "semantic-ui-react";

class ServiceCard extends React.Component {
  render() {
    return(
      <div class="serviceContainer">
        <div class="serviceCard">
          <Icon name="mobile"  size="huge"/>
          <h1>Mobile Development</h1>
        </div>

        <div class="serviceCard">
          <Icon name="desktop"  size="huge"/>
          <h1>Web Development</h1>
        </div>

        <div class="serviceCard">
          <Icon name="cubes"  size="huge"/>
          <h1>Custom Software</h1>
        </div>
      </div>
    );
  }
}

export default ServiceCard