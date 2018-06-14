import * as ActionTypes from './actions'

const initialState = {
  loggingIn: false,
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null
}
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true
      }

    case ActionTypes.LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload))
      return {
        ...state,
        loggingIn: false,
        user: action.payload
      }

    case ActionTypes.LOGIN_FAILURE:
      localStorage.removeItem('user')
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      }

    case ActionTypes.LOGOUT_REQUEST:
      localStorage.removeItem('user')
      return {
        ...state,
        loggingIn: false,
        user: null
      }
    case ActionTypes.LOGOUT_SUCCESS:
      // localStorage.removeItem('user')
      return {
        ...state,
        loggingIn: false,
        user: null
      }

    case ActionTypes.LOGOUT_REQUEST:
      return {
        ...state
      }

    case ActionTypes.LOGOUT_FAILURE:
      return {
        ...state
      }

    default:
      return state
  }
}
