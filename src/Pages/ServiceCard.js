import React, {Component} from 'react'
import { Icon } from "semantic-ui-react";

class ServiceCard extends React.Component {
  render() {
    return(
      <div  className = "serviceContainer">
      <div  className = "serviceCard">
      <Icon name  = "mobile"  size = "huge"/>
          <h1>Mobile Development</h1>
        </div>

        <div  className = "serviceCard">
        <Icon name  = "desktop"  size = "huge"/>
          <h1>Web Development</h1>
        </div>

          <div  className = "serviceCard">
          <Icon name      = "cubes"  size = "huge"/>
          <div  className = "serviceCard">
            <h1>Custom Software</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceCard