import React from 'react'
import { Card } from 'semantic-ui-react'

import src from '../../Assets/images/white-image.png';

const PortfolioCards = () => (
  <Card.Group itemsPerRow={4}>
    <Card color='red' raised image={src} />
    <Card color='orange' raised image={src} />
    <Card color='yellow' raised image={src} />
    <Card color='olive' raised image={src} />
    <Card color='green' raised image={src} />
    <Card color='teal' raised image={src} />
    <Card color='blue' raised image={src} />
    <Card color='violet' raised image={src} />
  </Card.Group>
)

export default PortfolioCards
