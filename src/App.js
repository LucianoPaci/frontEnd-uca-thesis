import React, { Component } from 'react'
import client from './client'
import logo from './logo.svg'
import './App.css'
import { Link } from 'react-router-dom'
import Typography from 'material-ui/Typography'
// import HomePage from './scenes/Home/HomePage'
import store from './store'
import { Provider as ReduxProvider } from 'react-redux'

class App extends Component {
  componentDidMount () {
    client.getUserById(this.props.id)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.id !== nextProps.id) {
      this.getUserInfo(nextProps.id)
    }
  }

  getUserInfo (id) {
    client.getUserById(id, (error, response) => {
      this.setState({ error, user: response })
    })
  }

  render () {
    return <div className='App' />
  }
}

export default App
