import React, { Component, Fragment } from 'react'
import Typography from 'material-ui/Typography'
import { Paper } from 'material-ui/Paper'
class LoginPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      submitted: false
    }
  }
  render () {
    return (
      <Fragment>
        <Typography variant='display1' gutterBottom={true}>
          Login
        </Typography>
      </Fragment>
    )
  }
}

export default LoginPage
