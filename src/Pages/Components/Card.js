import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import matt from '../../Assets/images/matthew.png'
const CardBio = () => (
  <Card>
    <Image src={matt} />
    <Card.Content>
      <Card.Header>Craig T.</Card.Header>
      <Card.Meta>Joined in </Card.Meta>
      <Card.Description>Some Info about yourself</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Something here
      </a>
    </Card.Content>
  </Card>

)

export default CardBio