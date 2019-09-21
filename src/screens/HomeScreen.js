import React from 'react'
import Donation from '../components/Donation.js'

import donations from '../data/donations'
import { Grid } from 'semantic-ui-react'

class HomeScreen extends React.Component {
  constructor(){
    super()
    this.state={
      donations,
      visible: false
    }
  }

  render() {
    return <Grid>
          <Grid.Row className="menu">
            <div className="text">Menu</div>
          </Grid.Row>
          <div className="title">
            MY<br />
            DONATIONS.<br />
          </div>
          {donations.map( (donation, i) => {
            return <Donation details={donation} key={donation.food + i}/>
          })}
        </Grid>
  }
}

export default HomeScreen