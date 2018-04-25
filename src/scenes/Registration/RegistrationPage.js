import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import { Paper, TextField, Card } from 'material-ui'
import { PropTypes } from 'prop-types'
import { Button, Icon } from 'material-ui'
import { login } from './actions'
import { userServices } from '../../services/userServices'
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
class RegistrationPage extends Component {
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
      password_cpy: '',
      username: '',
      name: '',
      surname: '',
      submitted: false
    }
  }

  // shouldComponentUpdate () {}

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    })
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

  submitData = () => {
    const {
      email,
      password,
      password_cpy,
      name,
      surname,
      username
    } = this.state

    let emailError, passwordError, nameError, surnameError, usernameError

    if (!email) {
      emailError = 'missingEmail'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = 'invalidEmail'
    }

    if (!password) {
      passwordError = 'missingPassword'
    }
    if (!name) {
      nameError = 'missingName'
    }
    if (!username) {
      usernameError = 'missingUserName'
    }
    if (!surname) {
      surnameError = 'missingSurname'
    }

    if (password !== password_cpy) {
      passwordError = 'passwordNotEqual'
    }

    if (
      emailError ||
      passwordError ||
      nameError ||
      surnameError ||
      usernameError
    ) {
      this.setState({
        emailError,
        passwordError,
        surnameError,
        nameError,
        usernameError
      })
    } else {
      this.setState({
        emailError: '',
        passwordError: '',
        nameError: '',
        surnameError: '',
        usernameError: ''
      })
      // Llamado a la action de login

      userServices.register(this.state).then((response) => {
        console.log(response)
        this.setState({
          ...this.state,
          submitted: true
        })
      })

      console.log(JSON.stringify(this.state, null, 2))
    }
  }
  render () {
    // const { email, password } = this.state
    return (
      <div style={styles.root}>
        <div style={styles.content}>
          <form style={styles.form}>
            <Typography variant='display1' align='center' gutterBottom={true}>
              Registrar
            </Typography>
            <Card style={styles.card}>
              <TextField
                placeholder='Nombre'
                id='name'
                style={styles.textField}
                autoFocus
                value={this.state.name}
                error={this.nameError}
                onChange={this.handleChange('name')}
              />
              <TextField
                placeholder='Apellido'
                id='surname'
                style={styles.textField}
                value={this.state.surname}
                error={this.surnameError}
                onChange={this.handleChange('surname')}
              />
              <TextField
                placeholder='Email'
                id='email'
                style={styles.textField}
                value={this.state.email}
                error={this.emailError}
                onChange={this.handleChange('email')}
              />
              <TextField
                placeholder='Username'
                id='username'
                style={styles.textField}
                value={this.state.username}
                error={this.usernameError}
                onChange={this.handleChange('username')}
              />

              <TextField
                placeholder='Contraseña'
                style={styles.textField}
                id='password'
                type='password'
                value={this.state.password}
                error={this.passwordError}
                onChange={this.handleChange('password')}
              />

              <TextField
                placeholder='Repetir Contraseña'
                style={styles.textField}
                id='password_cpy'
                type='password'
                value={this.state.password_cpy}
                error={this.passwordError}
                onChange={this.handleChange('password_cpy')}
              />

              <Button
                type='submit'
                style={styles.buttonLogin}
                variant='raised'
                color='primary'
                onClick={
                  this.handleSubmitForm
                  // console.log(JSON.stringify(this.state, null, 2))
                }
              >
                Registrar
              </Button>
            </Card>
          </form>
        </div>
      </div>
    )
  }
}

export default RegistrationPage
