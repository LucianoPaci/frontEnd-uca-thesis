// Nota: En el login, la confirmacion de password no se va a hacer. Pero se va agregar en el JSON que
// se va a postear, como un duplicado de la password

import React, { PureComponent } from 'react'
import Typography from 'material-ui/Typography'
import { Link } from 'react-router-dom'
import Grid from 'material-ui/Grid'
import { Paper, TextField, Card } from 'material-ui'
import { PropTypes as ptypes } from 'prop-types'
import { Button, Icon } from 'material-ui'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import validateInput from '../../services/validation/loginValidation'
import { RegistrationPageContainer } from '../RegistrationPage'
const styles = {
  root: {
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'scroll'
  },

  contentLogin: {
    margin: '32px auto 32px',
    width: 'calc(100% /2)'
  },
  buttonLogin: {
    height: '60px',
    width: '100%',
    marginTop: '24px',
    borderRadius: 50
  },
  card: {
    padding: '32px',
    // margin: '20px',
    width: '100%'
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
class LoginPage extends PureComponent {
  /**
   * PropTypes
   */

  static propTypes = {
    loginError: ptypes.object,
    loggingIn: ptypes.bool.isRequired,
    tryLogin: ptypes.func.isRequired
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
      errors: {},
      isClicked: false
    }
  }

  handleSubmitForm = (event) => {
    event.preventDefault()
    this.submitData()
    /**
     * preventDefault() method tells the user that if the 
     * event does not get explicitly handled, its default action should not be taken 
     * as it normally would be. 
     * https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
     */
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

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    })
  }

  submitData = () => {
    const { user, password } = this.state
    const { tryLogin } = this.props
    let userError, passwordError

    if (!user) {
      userError = 'missinguser'
    }
    // else if (!/\S+@\S+\.\S+/.test(user)) {
    // //   userError = 'invaliduser'
    // // }

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

      tryLogin(user, password)
    }
  }

  handleClickRegistrationButton = (event) => {
    this.setState({
      ...this.state,
      isClicked: true
    })
  }
  render () {
    const { user, password, errors, isClicked } = this.state
    const { loggingIn } = this.props

    // deserialize()

    return (
      <Grid
        container
        justify='center'
        spacing={40}
        styles={{ paddingTop: '120px' }}
      >
        {/* <Grid
            container
            style={{ position: 'fixed', height: '100%', top: 10 }}
          > */}

        <Grid item xs={6} md={6} lg={6} style={{ height: '100%' }}>
          <div style={styles.root}>
            <div style={styles.contentLogin}>
              <form style={styles.form} onSubmit={this.handleSubmitForm}>
                <Typography
                  variant='display1'
                  align='center'
                  gutterBottom={true}
                  marginRight='30px'
                >
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
                    // onClick={this.submitData}
                  >
                    Login
                  </Button>
                </Card>
              </form>
              <Button
                style={styles.buttonLogin}
                disabled={loggingIn}
                variant='raised'
                color='secondary'
                // component={(props) => <Link {...props} to='/registration' />}
                onClick={this.handleClickRegistrationButton}
              >
                Sign In
              </Button>
            </div>
            {isClicked ? (
              <div>
                <Route component={RegistrationPageContainer} />
              </div>
            ) : null}
          </div>
        </Grid>

        {/* <Grid item xs={6} md={6} lg={6} style={{ height: '100%' }}>
          <div style={styles.root}>
            <div style={styles.contentSignUp}>
              <form style={styles.form} onSubmit={this.handleSubmitForm}>
                <Typography
                  variant='display1'
                  align='center'
                  gutterBottom={true}
                >
                  Sign Up
                </Typography>
                <Card style={styles.card}>
                  <TextField
                    placeholder='Nombre'
                    style={styles.textField}
                    autoFocus
                    value={user}
                    disabled={loggingIn}
                    error={errors.user ? true : false}
                    onChange={this.handleUserChange}
                  />

                  <TextField
                    placeholder='Apellido'
                    style={styles.textField}
                    autoFocus
                    value={user}
                    disabled={loggingIn}
                    error={errors.user ? true : false}
                    onChange={this.handleUserChange}
                  />
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
                    // onClick={this.submitData}
                  >
                    Sign In
                  </Button>
                </Card>
              </form>
              <Button
                style={styles.buttonLogin}
                disabled={loggingIn}
                variant='raised'
                color='secondary'
                // component={(props) => <Link {...props} to='/registration' />}
                onClick={this.handleClickRegistrationButton}
              >
                Sign In
              </Button>
            </div>
            {isClicked ? (
              <div>
                <Route component={RegistrationPageContainer} />
              </div>
            ) : null}
          </div>
        </Grid> */}
      </Grid>
    )
  }
}

export default LoginPage
