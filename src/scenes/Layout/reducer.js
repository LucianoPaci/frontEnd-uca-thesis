import * as ActionTypes from './actions'

const initialState = {
  loggedIn: false
  // user: localStorage.getItem('user')
  //   ? JSON.parse(localStorage.getItem('user'))
  //   : null
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_PAGE:
      return {
        ...state,
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
