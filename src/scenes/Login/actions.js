import { userServices } from '../../services/userServices'
import { history } from '../../store/history'
import { push } from 'react-router-redux'
export const LOGIN_REQUEST = 'USERS_LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'USERS_LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'

export const login = (username, password) => {
  console.log('Estoy en el action, voy a entrar al userService')
  return (dispatch) => {
    console.log('aca')
    dispatch({
      type: LOGIN_REQUEST
    })
    userServices.login(username, password).then(
      // Login Successful!
      (user) => {
        dispatch({
          type: LOGIN_SUCCESS
        })
        history.push('/') // Va esto? Parece que debo meter algo aca
      },
      (err) => {
        // Login Failed
        dispatch({
          type: LOGIN_FAILURE,
          payload: err,
          error: true
        })
      }
    )
  }
}

export const logoutAndRedirect = (dispatch) => {
  dispatch(logout())
  dispatch(push({ pathname: '/' }))
}

export function logout () {
  return {
    type: LOGOUT
  }
}
