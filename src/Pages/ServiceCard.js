import React, {Component} from 'react'

class ServiceCard extends React.Component {
  render() {
    return(
      <div className="serviceContainer">
        <div className="serviceCard">
          <h1>Mobile Development</h1>
          <h3>We like to do mobile development</h3>
          <h3>We like to do mobile development</h3>
        </div>

        <div className="serviceCard">
          <h1>Web Development</h1>
          <h3>We like to do Web development</h3>
          <h3>We like to do Web development</h3>
        </div>

        <div className="serviceCard">
          <h1>Custom Software</h1>
          <h3>We like to do Custom development</h3>
          <h3>We like to do Custom development</h3>
        </div>
      </div>
    );
  }
}

export default ServiceCard