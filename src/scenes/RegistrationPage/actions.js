import { register, userServices } from '../../services/userServices'
import { push } from 'react-router-redux'

export const POSTING_REGISTRATION = 'POSTING_REGISTRATION'
export const POSTING_REGISTRATION_SUCCESS = 'POSTING_REGISTRATION_SUCCESS'
export const POSTING_REGISTRATION_FAILED = 'POSTING_REGISTRATION_FAILED'

export function trySignIn (data) {
  return (dispatch) => {
    dispatch({
      type: POSTING_REGISTRATION
    })

    userServices.register(data).then(
      (user) => {
        dispatch({
          type: POSTING_REGISTRATION_SUCCESS,
          payload: user
        })
      },
      (err) => {
        dispatch({
          type: POSTING_REGISTRATION_FAILED,
          payload: err,
          error: true
        })
      }
    )
  }
}
