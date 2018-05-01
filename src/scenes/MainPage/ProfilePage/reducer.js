import * as ActionTypes from './actions'

const initialState = {
  user: {},
  userProjects: [],
  isFetching: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCHING_ALL_USER_PROJECTS:
      return {
        ...state,
        isFetching: true
      }

    case ActionTypes.FETCHING_ALL_USER_PROJECTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userProjects: userProjects.concat(action.payload.results)
      }

    case ActionTypes.FETCHING_ALL_USER_PROJECTS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }

    default:
      return initialState
  }
}
