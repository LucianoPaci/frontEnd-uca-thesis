import React, { Component, Fragment } from 'react'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import NestedList from '../components/NestedList'
import SocialFeedCards from '../components/SocialFeedCards'
import { getAllProjects } from './actions'
import CircularIndeterminate from '../components/CircularIndeterminate'
import { connect } from 'react-redux'
class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  componentDidMount () {
    const { getAllProjects } = this.props
    const user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')).token
      : null

    getAllProjects(user)
  }

  render () {
    const { projects, isFetching } = this.props

    console.log(projects)
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

          <Grid
            container
            style={{ position: 'fixed', height: '100%', top: 10 }}
          >
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

          <Grid
            item
            xs={6}
            md={4}
            lg={6}
            style={{ padding: '120px 40px 40px 40px' }}
          >
            {isFetching ? <CircularIndeterminate /> : null}

            {!isFetching && projects ? (
              projects.map((project) => <SocialFeedCards project={project} />)
            ) : null}
          </Grid>
        </Grid>
        {/* Estaba aca  */}
      </Fragment>
    )
  }
}

// function mapStateToProps (state) {
//   const { projects, isFetching } = state

//   return {
//     projects,
//     isFetching
//   }
// }

// const mapDispatchToProps = {
//   getAllProjects
// }

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
export default HomePage
