import React from 'react'
import { Grid, Image, Divider } from 'semantic-ui-react'

const Donation = ({details}) => {
  console.log()
  return <Grid>
    <Grid.Row columns={3} className="donation">
      <Grid.Column width={1}>
        <Image circular src={details.imageUrl} className='image-food' />
        <div className="text">{details.food}</div>
      </Grid.Column>
      <Grid.Column width={2}>
        <Grid.Row>
          {details.amountRemaining} / {details.totalAmount} remaining
        </Grid.Row>
        <Grid.Row>
          Limit per pickup: {details.perPerson} {details.measurement}
        </Grid.Row>
        <Grid.Row>
          Pickup location: {details.pickupLocation}
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
    <Divider />
  </Grid>
}

export default Donation