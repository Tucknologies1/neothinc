import React, {Component} from 'react'

class ServiceCard extends React.Component {
  render() {
    return(
      <div class="serviceContainer">
        <div class="serviceCard">
          <h1>Mobile Development</h1>
        </div>

        <div class="serviceCard">
          <h1>Web Development</h1>
        </div>

        <div class="serviceCard">
          <h1>Custom Software</h1>
        </div>
      </div>
    );
  }
}

export default ServiceCard