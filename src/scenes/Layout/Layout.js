import React, { Component, Fragment } from 'react'
import ButtonAppBar from '../components/ButtonAppBar'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import NestedList from '../components/NestedList'
import SocialFeedCards from '../components/SocialFeedCards'

// Tendria que acceder al store y preguntar si el user esta logeado
// Si esta logeado, no deberia mostrar el ButtonAppBar
class Layout extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <Fragment>
        <ButtonAppBar
          title='UcaApp'
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 40,
            width: '100%'
          }}
        />

        <div style={{ paddingTop: '120px' }}>{this.props.children}</div>
      </Fragment>
    )
  }
}

export default Layout
