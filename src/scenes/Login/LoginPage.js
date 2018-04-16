import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import { Paper } from 'material-ui/Paper'
import { TextField } from 'material-ui/TextField'
class LoginPage extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      submitted: false
    }
  }

  // handleSubmitForm = (event) => {}
  render () {
    const { email, password } = this.state
    return (
      <div>
        <form>
          <Typography variant='display1' align='center' gutterBottom={true}>
            Login
          </Typography>
          <Paper>
            <TextField autoFocus value={email} />
            <TextField autoFocus value={password} />
          </Paper>
        </form>
      </div>
    )
  }
}

export default LoginPage
