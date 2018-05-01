import { userServices } from '../../services/userServices'
import { history } from '../../store/history'
import { push } from 'react-router-redux'
export const LOGIN_REQUEST = 'USERS_LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'USERS_LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'

export function tryLogin (user, password) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST
    })

    userServices.login(user, password).then(
      (user) => {
        dispatch(login(user))
      },
      (err) => {
        dispatch({
          type: LOGIN_FAILURE,
          payload: err,
          error: true
        })
      }
    )
  }
}

export function login (user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user
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
