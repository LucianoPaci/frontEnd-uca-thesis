import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import reducers from './reducers'
import { request } from './utils'

const api = 'https://swapi.co/api'

let store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ api, request })),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
