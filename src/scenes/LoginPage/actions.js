import { userServices } from '../../services/userServices'
import { history } from '../../store/history'
import { push } from 'react-router-redux'
export const LOGIN_REQUEST = 'USERS_LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'USERS_LOGIN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

export function tryLogin (user, password) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST
    })

    userServices.login(user, password).then(
      (user) => {
        dispatch(login(user))
        localStorage.setItem('user', JSON.stringify(user))
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

export function logoutAndRedirect () {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_REQUEST
    })
  }
}

export function logout () {
  return {
    type: LOGOUT_SUCCESS
  }
}
