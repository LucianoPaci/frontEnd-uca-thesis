import { userServices } from '../../../services/userServices'

export const FETCHING_ALL_PROJECTS = 'FETCHING_ALL_PROJECTS'
export const FETCHING_ALL_PROJECTS_SUCCESS = 'FETCHING_ALL_PROJECTS_SUCCESS'
export const FETCHING_ALL_PROJECTS_FAILED = 'FETCHING_ALL_PROJECTS_FAILED'

export function getAllProjects (user) {
  return (dispatch) => {
    dispatch({
      type: FETCHING_ALL_PROJECTS
    })
    userServices.getAllProjects(user).then(
      (projects) => {
        dispatch({
          type: FETCHING_ALL_PROJECTS_SUCCESS,
          payload: projects
        })
      },
      (err) => {
        dispatch({
          type: FETCHING_ALL_PROJECTS_FAILED,
          payload: err,
          error: true
        })
      }
    )
  }
}
