import { userServices } from '../../../services/userServices'

export const FETCH_PROJECT_DETAILS_SEARCHING = 'FETCH_PROJECT_DETAILS_SEARCHING'
export const FETCH_PROJECT_DETAILS_SEARCHED = 'FETCH_PROJECT_DETAILS_SEARCHED'
export const FETCH_PROJECT_DETAILS_SEARCHED_ERROR =
  'FETCH_PROJECT_DETAILS_SEARCHED_ERROR'

export const FETCH_ALL_PROJECTS_SEARCHING = 'FETCH_ALL_PROJECTS_SEARCHING'
export const FETCH_ALL_PROJECTS_SEARCHED = 'FETCH_ALL_PROJECTS_SEARCHED'
export const FETCH_ALL_PROJECTS_SEARCHED_ERROR =
  'FETCH_ALL_PROJECTS_SEARCHED_ERROR'

export const PROJECT_NEW_POSTING = 'PROJECT_NEW_POSTING'
export const PROJECT_NEW_POSTED_SUCCESS = 'PROJECT_NEW_POSTED'
export const PROJECT_NEW_POSTED_FAILED = 'PROJECT_NEW_POSTED_FAILED'

export const fetchProjects = (user) => {
  return (dispatch, getState, { apiLocal, fetch, token }) => {
    dispatch({
      type: FETCH_ALL_PROJECTS_SEARCHING
    })
    let headers = new Headers()
    headers.append(
      'Authorization'
      // 'Basic ' +
      //   'eyJhbGciOiJIUzI1NiIsImlhdCI6MTUyNDI2MjQyNywiZXhwIjoxNTI0MjYzMDI3fQ.eyJpZCI6Mn0.LReOyLZz2QVuYTYdA4_qdBiaZbTIrCFtxS2_kcSZTWU'
    )
    fetch('http://localhost:5000/verproyectos', {
      method: 'GET',
      headers: new Headers({
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsImlhdCI6MTUyNDI2MjQyNywiZXhwIjoxNTI0MjYzMDI3fQ.eyJpZCI6Mn0.LReOyLZz2QVuYTYdA4_qdBiaZbTIrCFtxS2_kcSZTWU',
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }),
      body: JSON.stringify({
        allProjects: [
          {
            //     id: project.id,
            // name: project.name,
            // description: project.description,
            // creation_date: project.creation_date,
            // created_by: creator.name + ' ' + creator.surnam
          }
        ]
      })
    })
      .then((response) => {
        dispatch({
          type: FETCH_ALL_PROJECTS_SEARCHED,
          payload: response
        })
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ALL_PROJECTS_SEARCHED_ERROR,
          payload: error
        })
      })
  }
}

// verproyecto
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

export function postProject (projectData) {
  const token = JSON.parse(localStorage.getItem('user')).token
  return (dispatch) => {
    dispatch({
      type: PROJECT_NEW_POSTING
    })

    userServices.postProject(projectData, token).then(
      (project) => {
        dispatch({
          type: PROJECT_NEW_POSTED_SUCCESS,
          payload: project
        })
      },
      (err) => {
        dispatch({
          type: PROJECT_NEW_POSTED_FAILED,
          payload: err,
          error: true
        })
      }
    )
  }
}
