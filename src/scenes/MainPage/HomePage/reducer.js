import * as ActionTypes from './actions'

const initialState = {
  projects: [],
  isFetching: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCHING_ALL_PROJECTS:
      return {
        ...state,
        isFetching: true
      }

    case ActionTypes.FETCHING_ALL_PROJECTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        projects: action.payload
      }

    case ActionTypes.FETCHING_ALL_PROJECTS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }

    default:
      return state
  }
}
