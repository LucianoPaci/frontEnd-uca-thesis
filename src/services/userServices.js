// Ir agregando las funciones a exportar
export const userServices = {
  login,
  logout,
  register
}

const apiLogin = '/api/ingresar'
const apiRegistrar = '/api/registrar'
console.log('Entre al userServices')

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

function authHeader () {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'))

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token }
  } else {
    return {}
  }
}
