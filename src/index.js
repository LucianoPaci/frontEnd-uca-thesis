import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Router, Route, Redirect, Switch, Prove } from 'react-router'
import { Link } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import createBrowserHistory from 'history/createBrowserHistory'
import * as request from 'browser-request'
import Layout from './scenes/Layout/Layout'
import ButtonAppBar from './scenes/components/ButtonAppBar'
import HomePage from './scenes/Home/HomePage'
import ProfilePage from './scenes/Profile/ProfilePage'
import ProjectPage from './scenes/Project/ProjectPage'
import LoginPage from './scenes/containers/Login/LoginPage'
const history = createBrowserHistory()

class UserPage extends React.Component {
  state = {
    user: null,
    error: null
  }

  componentDidMount () {
    request(
      { method: 'GET', uri: `/v1/user/${this.props.id}`, json: true },
      (error, response, body) => {
        if (error) {
          this.setState({ error })
        } else if (response.statusCode == 404) {
          this.setState({
            error: new Error(`El usuario con id: ${this.props.id} no existe `)
          })
        } else if (response.statusCode == 500) {
          this.setState({ error: new Error(`Error interno`) })
        } else if (response.statusCode == 200) {
          console.log('Success')
        }
      }
    )
  }
  render () {
    return (
      <div>
        <h1>Soy el user {this.props.id}</h1>
        {this.state.user}
        {/* {this.state.error} */}
      </div>
    )
  }
}

// class ConsultaPage extends React.Component {
//   render () {
//     return <h1>Soy una consulta</h1>
//   }
// }

// class ConsultaBusquedaPage extends React.Component {
//   render () {
//     return (
//       <div>
//         <h1>Que estas buscado?</h1>
//         <Link to={'/user/1234'}> ir al user </Link>
//       </div>
//     )
//   }
// }

class NotFoundPage extends React.Component {
  render () {
    return <h1>PAGE NOT FOUND</h1>
  }
}
// class InternalErrorPage extends React.Component {
//   render () {
//     return <h1>InternalError</h1>
//   }
// }

ReactDOM.render(
  <Router history={history}>
    <Layout>
      <Switch>
        <Route
          path='/user/:id'
          component={(props) => {
            return <UserPage id={props.match.params.id} />
          }}
        />
        {/* <Route path='/consulta/:id' component={ConsultaPage} />
        <Route exact={true} path='/' component={ConsultaBusquedaPage} /> */}
        <Route path='/principal' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/project' component={ProjectPage} />
        <Route path='/project/create' component={ProjectPage} />{' '}
        {/*Aca deberia ir al form de creacion de proyecto*/}
        <Route
          path='/project/:id'
          component={(props) => {
            return <ProjectPage id={props.match.params.id} />
          }}
        />
        <Route
          path='/profile/:id'
          component={(props) => {
            return <ProfilePage id={props.match.params.id} />
          }}
        />
        <Route path='/(.*)' component={NotFoundPage} />
      </Switch>
    </Layout>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
