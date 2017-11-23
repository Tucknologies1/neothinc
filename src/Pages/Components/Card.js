import React, {Component} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
// Import pictures here
import matt from '../../Assets/images/matthew.png'
class CardBio extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
  return(
    <Card>
      <Image src={matt} />
      <Card.Content>
        <Card.Header>{this.props.name}</Card.Header>
        <Card.Meta>{this.props.position}</Card.Meta>
        <Card.Description>{this.props.aboutYourself}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          Something here
        </a>
      </Card.Content>
    </Card>
  )
  }
}


export default CardBio