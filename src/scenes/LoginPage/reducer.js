import * as ActionTypes from './actions'

const initialState = {
  loggingIn: false,
  user: '',
  password: ''
}
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false
        // user: action.payload.result
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

    default:
      return initialState
  }
}
