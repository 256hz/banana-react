import React from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'

const Donation = ({details}) => {
  console.log()
  return <Grid width={3}>
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
        <Grid.Row>
          Time Remaining: {details.ending} min
        </Grid.Row>
        <Grid.Row centered>
          <Button>Add 30 Min</Button>
          <Button negative>Cancel</Button>
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  </Grid>
}

export default Donation