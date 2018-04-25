import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'
import { history } from './history'
const api = 'http://localhost:5000/'

const configureStore = createStore(
  rootReducer,
  compose(
    routerMiddleware(history),
    applyMiddleware(thunk.withExtraArgument({ api })),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      ((x) => x)
  )
)

export default configureStore
