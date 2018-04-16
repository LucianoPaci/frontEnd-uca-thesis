import React, { Component, Fragment } from 'react'
import ButtonAppBar from '../components/ButtonAppBar'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import NestedList from '../components/NestedList'
import SocialFeedCards from '../components/SocialFeedCards'
import * as request from 'browser-request'
import image from '../../media/images/cat.jpg'
import ImageAvatars from '../components/ImageAvatars'

import ProfileCard from '../components/ProfileCard'
class ProfilePage extends Component {
  constructor (props) {
    super()

    this.state = {
      user: {},
      error: null
    }
  }

  componentDidMount () {
    request(
      { method: 'GET', uri: `/v1/user/${this.props.id}`, json: true },
      (error, response, body) => {
        if (error) {
          this.setState({ error })
        } else if (response.statusCode == 404) {
          this.setState({
            error: new Error(`El usuario con id: ${this.props.id} no existe `)
          })
        } else if (response.statusCode == 500) {
          this.setState({ error: new Error(`Error interno`) })
        } else if (response.statusCode == 200) {
          console.log('Success')
        }
      }
    )
  }

  render () {
    return (
      <Fragment>
        <Grid container style={{ position: 'fixed', height: '100%' }}>
          <Grid item xs={6} md={4} lg={4} style={{ height: '100%' }}>
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
              <ImageAvatars />
              <ProfileCard
                firstName={`Luciano`}
                lastName={`Paci`}
                studentOf={`Informatica`}
              />
            </Paper>
          </Grid>
        </Grid>

        <Grid
          container
          justify='center'
          spacing='40'
          style={{ paddingTop: '120px' }}
        >
          <Grid item xs={6} md={4} lg={4} />
          <Grid item xs={6} md={8} lg={8}>
            <SocialFeedCards />
            <SocialFeedCards />
            <SocialFeedCards />
            <SocialFeedCards />
            <SocialFeedCards />
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

export default ProfilePage
