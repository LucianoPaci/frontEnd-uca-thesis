import * as ActionTypes from './actions'

const initialState = {
  signingIn: false,
  user: null
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.POSTING_REGISTRATION:
      return {
        ...state,
        signingIn: true
      }

    case ActionTypes.POSTING_REGISTRATION_SUCCESS:
      return {
        ...state,
        signingIn: false,
        user: action.payload.result
      }

    case ActionTypes.POSTING_REGISTRATION_FAILED:
      return {
        ...state,
        signingIn: false,
        error: action.payload
      }

    default:
      return state
  }
}
