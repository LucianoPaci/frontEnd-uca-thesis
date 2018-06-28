import * as ActionTypes from './actions'

const initialState = {
  isSearching: false,
  projectDetails: null,
  allProjects: null,
  isPosting: false,
  allSkills: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_PROJECT_DETAILS_SEARCHING:
      return {
        ...state,
        isSearching: true
      }

    case ActionTypes.FETCH_PROJECT_DETAILS_SEARCHED:
      return {
        ...state,
        isSearching: false,
        projectDetails: state.projectDetails.concat(action.payload.results)
      }

    case ActionTypes.FETCH_PROJECT_DETAILS_SEARCHED_ERROR:
      return {
        ...state,
        isSearching: false,
        error: action.payload.toString() //Agrega el atributo 'error' al objeto
      }

    case ActionTypes.FETCH_ALL_PROJECTS_SEARCHING:
      return {
        ...state,
        isSearching: true
      }
    case ActionTypes.FETCH_ALL_PROJECTS_SEARCHED:
      return {
        ...state,
        isSearching: false,
        allProjects: state.allProjects.concat(action.payload.results)
      }
    case ActionTypes.FETCH_ALL_PROJECTS_SEARCHED_ERROR:
      return {
        ...state,
        isSearching: false,
        error: action.payload.toString() //Agrega el atributo 'error' al objeto
      }

    case ActionTypes.PROJECT_NEW_POSTING:
      return {
        ...state,
        isPosting: true
      }
    case ActionTypes.PROJECT_NEW_POSTED_SUCCESS:
      return {
        ...state,
        isPosting: false
      }
    case ActionTypes.PROJECT_NEW_POSTED_FAILED:
      return {
        ...state,
        isPosting: false
      }

    case ActionTypes.FETCHING_ALL_SKILLS:
      return {
        ...state,
        isSearching: true
      }

    case ActionTypes.FETCHING_ALL_SKILLS_SUCCESS:
      return {
        ...state,
        isSearching: false,
        allSkills: action.payload
      }

    case ActionTypes.FETCHING_ALL_SKILLS_ERROR:
      return {
        ...state,
        isSearching: false,
        error: action.payload.toString() //Agrega el atributo 'error' al objeto
      }

    default:
      return state
  }
}
