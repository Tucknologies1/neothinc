import React from 'react'
import { Card } from 'semantic-ui-react'

const items = [
  {
    header: 'Web Development',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
  },
  {
    header: 'Mobile Development',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
  },
  {
    header: 'Web Design',
    description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
  },
  {
    header: 'Custom Software',
    description: 'Look at this software',
  },
]

const ServiceCard = () => (
  <Card.Group items={items} />
)

export default ServiceCard