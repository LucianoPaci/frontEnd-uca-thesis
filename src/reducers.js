import { combineReducers } from 'redux'

// Importo los distintos reducers que hay en la app

import projectForm from './scenes/ProjectPage/ProjectForm/reducer'
import loginPage from './scenes/LoginPage/reducer'
import layoutPage from './scenes/Layout/reducer'
import homePage from './scenes/MainPage/HomePage/reducer'
// Hay que traerse el action de Logout para borrar el store
import { LOGOUT } from './scenes/LoginPage/actions'

// Exporto todos los reducers bajo 1 solo

const appReducer = combineReducers({
  projectForm,
  loginPage,
  layoutPage,
  homePage
})

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
