import * as ActionTypes from './actions'

const initialState = {
  id: 'unknown',
  buttons: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_PAGE:
      return {
        ...state,
        ...initialState,
        ...action.payload
      }

    default:
      return state
  }
}
