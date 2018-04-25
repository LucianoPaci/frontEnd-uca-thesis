// Nota: En el login, la confirmacion de password no se va a hacer. Pero se va agregar en el JSON que
// se va a postear, como un duplicado de la password

import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import { Paper, TextField, Card } from 'material-ui'
import { PropTypes as ptypes } from 'prop-types'
import { Button, Icon } from 'material-ui'
// import { login } from './actions' // Se reemplazo el login del action por el login de services/usserServices
import { userServices } from '../../services/userServices'
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

  static propTypes = {
    loginError: ptypes.object,
    loggingIn: ptypes.bool.isRequired,
    login: ptypes.func.isRequired
  }

  /**
   * Constructor
  */

  // En los props del Container vienen {user, loggingIn, loginError}

  constructor (props) {
    super(props)

    this.state = {
      user: '',
      password: '',
      errors: {}
    }
  }

  // shouldComponentUpdate () {}

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleUserChange = (event) => {
    this.setState({
      user: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  handleSubmitForm = (event) => {
    event.preventDefault()

    // // if (this.isValid()) {
    // console.log(this.state.user, this.state.password)
    // userServices.login(this.state.user, this.state.password).then((user) => {
    //   this.setState(...this.state, user)
    //   // console.log(this.state)
    // })

    // }
    this.submitData()
    /**
     * preventDefault() method tells the user that if the 
     * event does not get explicitly handled, its default action should not be taken 
     * as it normally would be. 
     * https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
     */
  }

  // isValid = () => {
  //   const { errors, isValid } = validateInput(this.state)
  //   console.log(`Dentro del 'isValid'`)
  //   if (!isValid) {
  //     this.setState({ errors })
  //   }

  //   return isValid
  // }

  submitData = () => {
    const { user, password } = this.state
    const { login } = this.props
    let userError, passwordError

    if (!user) {
      userError = 'missinguser'
    } else if (!/\S+@\S+\.\S+/.test(user)) {
      userError = 'invaliduser'
    }
    console.log('En el SubmitData')

    if (!password) {
      passwordError = 'missingPassword'
    }

    if (userError || passwordError) {
      this.setState({
        ...this.state,
        errors: {
          userError,
          passwordError
        }
      })
    } else {
      this.setState({
        ...this.state,
        errors: {
          userError: '',
          passwordError: ''
        }
      })
      // Llamado a la action de login
      login(user, password)
      // console.log(
      //   JSON.stringify(
      //     {
      //       user,
      //       password
      //     },
      //     null,
      //     2
      //   )
      // )
    }
  }
  render () {
    const { user, password, errors } = this.state
    const { loggingIn } = this.props
    return (
      <div style={styles.root}>
        <div style={styles.content}>
          <form style={styles.form} onSubmit={this.handleSubmitForm}>
            <Typography variant='display1' align='center' gutterBottom={true}>
              Login
            </Typography>
            <Card style={styles.card}>
              <TextField
                placeholder='Username'
                style={styles.textField}
                autoFocus
                value={user}
                disabled={loggingIn}
                error={errors.user ? true : false}
                onChange={this.handleUserChange}
              />

              <TextField
                placeholder='Password'
                style={styles.textField}
                type='password'
                value={password}
                disabled={loggingIn}
                error={errors.password ? true : false}
                onChange={this.handlePasswordChange}
              />

              <Button
                type='submit'
                style={styles.buttonLogin}
                disabled={loggingIn}
                variant='raised'
                color='primary'
                onClick={this.handleSubmitForm}
              >
                Login
              </Button>

              <Button
                type='submit'
                style={styles.buttonLogin}
                variant='raised'
                color='primary'
                onClick={userServices.logout}
              >
                Logout
              </Button>
            </Card>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage
