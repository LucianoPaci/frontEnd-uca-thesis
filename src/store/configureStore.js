// import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'
import { history } from './history'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
// const api = 'http://localhost:5000/'

// const configureStore = createStore(
//   rootReducer,
//   compose(
//     routerMiddleware(history),
//     applyMiddleware(thunk.withExtraArgument({ api })),
//     (window.__REDUX_DEVTOOLS_EXTENSION__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION__()) ||
//       ((x) => x)
//   )
// )

const configureStore = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware, logger, routerMiddleware(history)),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      ((x) => x)
  )
)
console.log(configureStore.getState())

export default configureStore
