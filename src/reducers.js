import { combineReducers } from 'redux'

// Importo los distintos reducers que hay en la app

import projectForm from './scenes/Project/projectForm/reducer'

// Exporto todos los reducers bajo 1 solo

export default combineReducers({
  projectForm
})
