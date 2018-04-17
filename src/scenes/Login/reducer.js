import * as ActionTypes from './actions'

const initialState = {
  loggingIn: false
}
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        initialState
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
