import React from 'react'
import { Grid } from 'semantic-ui-react'

import { NavLink } from 'react-router-dom'
import Donation from '../components/Donation.js'
import donations from '../data/donations'

class HomeMenu extends React.Component {
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
            <div className="text">
              <NavLink className="login-link" to="/menu">
                <div className="title">MENU</div>
              </NavLink>
            </div>
          </Grid.Row>
          <div className="title large-text">
            MY<br />
            DONATIONS.<br />
          </div>
          {donations.map( (donation, i) => {
            return <Donation details={donation} key={donation.food + i}/>
          })}
        </Grid>
  }
}

export default HomeMenu