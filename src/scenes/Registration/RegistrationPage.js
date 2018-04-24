import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import { Paper, TextField, Card } from 'material-ui'
import { PropTypes } from 'prop-types'
import { Button, Icon } from 'material-ui'
import { login } from './actions'

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
      name: '',
      surname: '',
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
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleSurnameChange = (event) => {
    this.setState({
      surname: event.target.value
    })
  }

  handlePasswordCopyChange = (event) => {
    this.setState({
      password_cpy: event.target.value
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
    const { email, password, password_cpy, name, surname } = this.state

    let emailError, passwordError, nameError, surnameError

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
    if (!surname) {
      surnameError = 'missingSurname'
    }

    if (password !== password_cpy) {
      passwordError = 'passwordNotEqual'
    }

    if (emailError || passwordError || nameError || surnameError) {
      this.setState({
        emailError,
        passwordError,
        surnameError,
        nameError
      })
    } else {
      this.setState({
        emailError: '',
        passwordError: '',
        nameError: '',
        surnameError: ''
      })
      // Llamado a la action de login

      // login(email, password)
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
                style={styles.textField}
                autoFocus
                value={this.state.name}
                error={this.surnameError}
                onChange={this.handleNameChange}
              />
              <TextField
                placeholder='Apellido'
                style={styles.textField}
                // autoFocus
                value={this.state.surname}
                error={this.surnameError}
                onChange={this.handleSurnameChange}
              />
              <TextField
                placeholder='Email'
                style={styles.textField}
                // autoFocus
                value={this.state.email}
                error={this.emailError}
                onChange={this.handleEmailChange}
              />

              <TextField
                placeholder='Contraseña'
                style={styles.textField}
                // autoFocus
                type='password'
                value={this.state.password}
                error={this.passwordError}
                onChange={this.handlePasswordChange}
              />

              <TextField
                placeholder='Repetir Contraseña'
                style={styles.textField}
                // autoFocus
                type='password'
                value={this.state.password_cpy}
                error={this.passwordError}
                onChange={this.handlePasswordCopyChange}
              />

              <Button
                // type='submit'
                style={styles.buttonLogin}
                variant='raised'
                color='primary'
                onClick={() => {
                  // this.handleSubmitForm()
                  console.log(JSON.stringify(this.state, null, 2))
                }}
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
