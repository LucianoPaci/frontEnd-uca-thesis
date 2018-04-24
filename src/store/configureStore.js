import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../reducers'
import { request } from '../utils'

const api = 'http://localhost:5000/'

let configureStore = createStore(
  reducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ api, request })),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default configureStore
