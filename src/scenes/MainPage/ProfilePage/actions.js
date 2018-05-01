// Actions para traerse Users y sus proyectos

import { userServices } from '../../../services/userServices'

export const FETCHING_ALL_USER_PROJECTS = 'FETCHING_ALL_USER_PROJECTS'
export const FETCHING_ALL_USER_PROJECTS_SUCCESS =
  'FETCHING_ALL_USER_PROJECTS_SUCCESS'
export const FETCHING_ALL_USER_PROJECTS_FAILED =
  'FETCHING_ALL_USER_PROJECTS_FAILED'

export const FETCHING_USER_DATA = 'FETCHING_USER_DATA'
export const FETCHING_USER_DATA_SUCCESS = 'FETCHING_USER_DATA_SUCCESS'
export const FETCHING_USER_DATA_FAILED = 'FETCHING_USER_DATA_FAILED'

export function getAllUserProjects (user) {
  return (dispatch) => {
    dispatch({
      type: FETCHING_ALL_USER_PROJECTS
    })

    userServices.getAllProjects(user).then(
      (projects) => {
        dispatch({
          type: FETCHING_ALL_USER_PROJECTS_SUCCESS,
          payload: projects
        })
      },
      (err) => {
        dispatch({
          type: FETCHING_ALL_USER_PROJECTS_FAILED,
          payload: err,
          error: true
        })
      }
    )
  }
}

// export function getUserData (user) {
//   return (dispatch) => {
//     dispatch({
//       type: FETCHING_USER_DATA
//     })
//   }
// }
