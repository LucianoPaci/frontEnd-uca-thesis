import { push } from 'react-router-redux'
export const UPDATE_PAGE = 'UPDATE_PAGE'
export const UPDATE_TOKEN = 'UPDATE_TOKEN'

export function updatePage (state) {
  return {
    type: UPDATE_PAGE,
    payload: state
  }
}

export function updateToken (key) {
  return (dispatch) => {
    type: UPDATE_TOKEN
    payload: {
      user: localStorage.getItem(key)
    }
  }
}
