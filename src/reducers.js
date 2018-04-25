import { combineReducers } from 'redux'

// Importo los distintos reducers que hay en la app

import projectForm from './scenes/Project/projectForm/reducer'
import loginPage from './scenes/Login/reducer'

// Hay que traerse el action de Logout para borrar el store
import { LOGOUT } from './scenes/Login/actions'

// Exporto todos los reducers bajo 1 solo

const appReducer = combineReducers({
  projectForm,
  loginPage
})

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
