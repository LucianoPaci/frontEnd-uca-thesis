// Nota: En el login, la confirmacion de password no se va a hacer. Pero se va agregar en el JSON que
// se va a postear, como un duplicado de la password

import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import { Paper, TextField, Card } from 'material-ui'
import { PropTypes } from 'prop-types'
import { Button, Icon } from 'material-ui'
import { login } from './actions'
import { connect } from 'react-redux'
import validateInput from '../../services/validation/loginValidation'

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

  // static propTypes = {
  //   defaultValues: PropTypes.object.isRequired
  // }

  /**
   * Constructor
  */

  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      submitted: false,
      isLoading: false,
      errors: {}
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
  handleSubmitForm = (event) => {
    event.preventDefault()
    // console.log(this.state)

    if (this.isValid()) {
      console.log('Aca estot tamboen')
    }
    // this.submitData()
    /**
     * preventDefault() method tells the user that if the 
     * event does not get explicitly handled, its default action should not be taken 
     * as it normally would be. 
     * https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
     */
  }

  isValid = () => {
    const { errors, isValid } = validateInput(this.state)
    console.log('Aca estoy ')
    if (!isValid) {
      this.setState({ errors })
    }

    return isValid
  }

  // submitData = () => {
  //   const { email, password } = this.state

  //   let emailError, passwordError

  //   if (!email) {
  //     emailError = 'missingEmail'
  //   } else if (!/\S+@\S+\.\S+/.test(email)) {
  //     emailError = 'invalidEmail'
  //   }

  //   if (!password) {
  //     passwordError = 'missingPassword'
  //   }

  //   if (emailError || passwordError) {
  //     this.setState({
  //       emailError,
  //       passwordError
  //     })
  //   } else {
  //     this.setState({
  //       emailError: '',
  //       passwordError: ''
  //     })
  //     // Llamado a la action de login
  //     login(email, password)
  //     console.log(
  //       JSON.stringify(
  //         {
  //           email,
  //           password
  //         },
  //         null,
  //         2
  //       )
  //     )
  //   }
  // }
  render () {
    const { email, password, errors, isLoading } = this.state
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
                value={email}
                error={errors.email}
                onChange={this.handleEmailChange}
              />

              <TextField
                placeholder='Password'
                style={styles.textField}
                type='password'
                value={password}
                error={errors.password}
                onChange={this.handlePasswordChange}
              />

              <Button
                type='submit'
                style={styles.buttonLogin}
                variant='raised'
                color='primary'
                onClick={this.handleSubmitForm}
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
