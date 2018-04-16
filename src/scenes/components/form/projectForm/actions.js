export const FETCH_PROJECT_DETAILS_SEARCHING = 'FETCH_PROJECT_DETAILS_SEARCHING'
export const FETCH_PROJECT_DETAILS_SEARCHED = 'FETCH_PROJECT_DETAILS_SEARCHED'
export const FETCH_PROJECT_DETAILS_SEARCHED_ERROR =
  'FETCH_PROJECT_DETAILS_SEARCHED_ERROR'

export const FETCH_PROJECT_SEARCHING = 'FETCH_PROJECT_SEARCHING'
export const FETCH_PROJECT_SEARCHED = 'FETCH_PROJECT_SEARCHED'
export const FETCH_PROJECT_SEARCHED_ERROR = 'FETCH_PROJECT_SEARCHED_ERROR'

export const PROJECT_NEW_POSTING = 'PROJECT_NEW_POSTING'
export const PROJECT_NEW_POSTED = 'PROJECT_NEW_POSTED'
export const PROJECT_NEW_POST_FAILED = 'PROJECT_NEW_POST_FAILED'

export const fetchProject = () => {
  return (dispatch, getState, { api, request }) => {
    dispatch({
      type: FETCH_PROJECT_SEARCHING
    })
    request(api + 'projects/', 'GET')
      .then((response) => {
        dispatch({
          type: FETCH_PROJECT_SEARCHED,
          payload: response
        })
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PROJECT_DETAILS_SEARCHED_ERROR,
          payload: error
        })
      })
  }
}

export const fetchProjectDetails = (projectUrl) => {
  return (dispatch, getState, { api, request }) => {
    dispatch({
      type: FETCH_PROJECT_DETAILS_SEARCHING,
      payload: { total: projectUrl.length }
    })
    projectUrl.forEach((url) => {
      request(url, 'GET')
        .then((response) => {
          dispatch({
            type: FETCH_PROJECT_DETAILS_SEARCHED,
            payload: response
          })
        })
        .catch((error) => {
          dispatch({
            type: FETCH_PROJECT_DETAILS_SEARCHED_ERROR,
            payload: error
          })
        })
    })
  }
}
