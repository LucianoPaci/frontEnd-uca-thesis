import { combineReducers } from 'redux'

// Importo los distintos reducers que hay en la app

import projectForm from './components/form/projectForm/reducer'


// Exporto todos los reducers bajo 1 solo

export default combineReducers({
  projectForm
})
