import * as ActionTypes from './actions'

const initialState = {
  user: '',
  loggedIn: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_PAGE:
      return {
        ...state,
        ...initialState,
        ...action.payload
      }

    case ActionTypes.UPDATE_TOKEN:
      return {
        ...state,
        loggedIn: !!action.payload,
        user: action.payload
      }

    default:
      return state
  }
}
