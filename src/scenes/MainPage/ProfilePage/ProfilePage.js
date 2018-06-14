import React, { Component, Fragment } from 'react'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import SocialFeedCards from '../components/SocialFeedCards'
import image from '../../../media/images/cat.jpg'
import ImageAvatars from '../components/ImageAvatars'
import ProfileCard from '../components/ProfileCard'

const styles = {
  paper: {
    paddingTop: '120px',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 20
  },
  gridContainer: {
    padding: '120px 40px 40px 40px'
  }
}

class ProfilePage extends Component {
  constructor (props) {
    super()

    this.state = {
      user: {},
      error: null
    }
  }

  // componentDidMount(){
  //   const user = JSON.parse(localStorage.getItem('user'))
  // }

  render () {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
      <Fragment>
        <Grid container style={{ position: 'fixed', height: '100%' }}>
          <Grid item xs={6} md={4} lg={4} style={{ height: '100%' }}>
            <Paper style={styles.paper}>
              <ImageAvatars />
              <ProfileCard
                firstName={user.name}
                lastName={user.surname}
                username={`@${user.username}`}
              />
            </Paper>
          </Grid>
        </Grid>

        <Grid
          container
          justify='center'
          spacing='40'
          style={styles.gridContainer}
        >
          <Grid item xs={6} md={4} lg={4} />
          <Grid item xs={6} md={8} lg={8}>
            <SocialFeedCards
              title={'Aca deberian ir los proyectos a los que esta suscripto'}
            />
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
