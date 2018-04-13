import * as ActionTypes from './actions'

const initialState = {
  isSearching: false,
  projectDetails : []
}

export default function reducer (state = initialState, action) {

  switch(action.type) {
    case ActionTypes.FETCH_PROJECT_DETAILS_SEARCHING:
      return {
          ...state,
          isSearching: true
      }

      case ActionTypes.FETCH_PROJECT_DETAILS_SEARCHED:
      return {
        ...state,
        isSearching : false,
        projectDetails   : state.projectDetails.concat(action.payload.results)
      }

    case ActionTypes.FETCH_PROJECT_SEARCHED_ERROR:
      return {
        ...state,
        isSearching : false,
        error       : action.payload.toString() //Agrega el atributo 'error' al objeto
      }

      default:
      return state
  }

}