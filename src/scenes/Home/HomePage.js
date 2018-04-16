import React, { Component, Fragment } from 'react'
import ButtonAppBar from '../components/ButtonAppBar'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import NestedList from '../components/NestedList'
import SocialFeedCards from '../components/SocialFeedCards'
class HomePage extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <Fragment>
        <Grid
          container
          justify='center'
          spacing='40'
          styles={{ paddingTop: '120px' }}
        >
          {/* <Grid item xs={6} md={4} lg={3}>

                    </Grid> */}

          <Grid container style={{ position: 'fixed', height: '100%', top: 0 }}>
            <Grid item xs={6} md={4} lg={3} style={{ height: '100%' }}>
              <Paper
                style={{
                  paddingTop: '120px',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 20
                }}
              >
                <NestedList />
              </Paper>
            </Grid>
          </Grid>

          <Grid item xs={6} md={4} lg={6}>
            <SocialFeedCards />
            <SocialFeedCards />
            <SocialFeedCards />
            <SocialFeedCards />
            <SocialFeedCards />
          </Grid>
        </Grid>
        {/* Estaba aca  */}
      </Fragment>
    )
  }
}

export default HomePage
