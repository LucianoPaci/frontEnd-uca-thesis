// Ir agregando las funciones a exportar

import axios from 'axios'

export const userServices = {
  login,
  logout,
  register,
  getAllProjects,
  postProject
}

const apiLogin = '/api/ingresar'
const apiRegistrar = '/api/registrar'
const apiGetAllProjects = '/api/verproyectos'
const apiPostProject = '/api/proyecto'

/**
 * FUNCIONES DE AUTH
 */

function login (username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  }

  return fetch(apiLogin, requestOptions)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response.statusText)
      }

      return response.json()
    })
    .then((user) => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes

        /**
           * OJO AL PIOJO ACA. SE usa localStorage ?
           */

        // localStorage = The localStorage object stores the data with
        //  no expiration date. The data will not be deleted when the
        // browser is closed, and will be available the next day, week, or year.
        localStorage.setItem('user', JSON.stringify(user))
      }

      return user
    })
}

function logout () {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
}

function register (user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }

  return fetch(apiRegistrar, requestOptions).then((response) => {
    if (!response.ok) {
      return Promise.reject(response.statusText)
    }
    return response.json()
  })
}

/**
 * FUNCIONES DE PROYECTOS
 */

function getAllProjects (token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
      Accept: 'application/json'
    }
  }

  return fetch(apiGetAllProjects, requestOptions).then((response) => {
    if (!response.ok) {
      return Promise.reject(response.statusText)
    }

    return response.json()
  })
}

function postProject (data, token) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify(data)
  }

  return fetch(apiPostProject, requestOptions).then((response) => {
    if (!response.ok) {
      return Promise.reject(response.statusText)
    }
    return response.json()
  })
}

//REVISAR PORQUE MIERDA NO FUNCIONA

// function getAllProjects (token) {
//   axios({
//     method: 'GET',
//     url: apiGetAllProjects,
//     responseType: 'application/json',
//     headers: { Authorization: token }
//   })
//     .then((response) => {
//       console.log(response.data)
//       return response.json()
//     })
//     .catch((error) => {
//       console.log(error)
//       return error.json()
//     })
// }

export const deserialize = (key) => {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : undefined
}

function authHeader () {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'))

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token }
  } else {
    return {}
  }
}
