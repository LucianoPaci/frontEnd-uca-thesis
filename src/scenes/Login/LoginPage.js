import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import { Paper, TextField, Card } from 'material-ui'
import { PropTypes } from 'prop-types'
import { Button, Icon } from 'material-ui'

const styles = {
  root: {
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'scroll'
  },

  content: {
    margin: '32px auto 32px',
    width: 'calc(100% / 3)'
  },
  buttonLogin: {
    height: '60px',
    width: '100%',
    marginTop: '24px',
    borderRadius: 50
  },
  card: {
    padding: '32px',
    margin: '20px'
  },

  form: {
    marginTop: '56px'
  },

  textField: {
    width: '80%',
    padding: '20px',
    margin: '10px'
  }
}
class LoginPage extends Component {
  /**
   * PropTypes
   */

  static propTypes = {
    defaultValues: PropTypes.object.isRequired
  }

  /**
   * Constructor
  */

  constructor (props) {
    super(props)

    this.state = {
      // email: props.defaultValues.email || '',
      // password: props.defaultValues.password || '',

      email: '',
      password: '',
      submitted: false
    }
  }

  // shouldComponentUpdate () {}

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  // handleSubmitForm = (event) => {}
  render () {
    // const { email, password } = this.state
    return (
      <div style={styles.root}>
        <div style={styles.content}>
          <form style={styles.form}>
            <Typography variant='display1' align='center' gutterBottom={true}>
              Login
            </Typography>
            <Card style={styles.card}>
              <TextField
                placeholder='Email'
                style={styles.textField}
                autoFocus
                value={this.state.email}
                onChange={this.handleEmailChange}
              />

              <TextField
                placeholder='Password'
                style={styles.textField}
                autoFocus
                type='password'
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />

              <Button
                style={styles.buttonLogin}
                variant='raised'
                color='primary'
              >
                Login
              </Button>
            </Card>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage
