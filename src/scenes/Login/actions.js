import { userServices } from '../../services/userServices'
import { history } from '../../store/history'
export const LOGIN_REQUEST = 'USERS_LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'USERS_LOGIN_FAILURE'

export const login = (username, password) => {
  return (dispatch, getState, { api, request }) => {
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
