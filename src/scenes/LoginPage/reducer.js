import * as ActionTypes from './actions'

const initialState = {
  loggingIn: false,
  user: null
}
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        // ...state,
        // loggingIn: false,
        ...initialState,
        user: action.payload
      }

    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true
      }

    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      }

    case ActionTypes.LOGOUT:
      return {
        loggingIn: false
      }

    default:
      return initialState
  }
}
