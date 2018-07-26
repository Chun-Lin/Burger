import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import App from './App'
import burgerBuilderReducer from './container/store/reducers/burgerBuilder'
import orderReducer from './container/store/reducers/order'
import authReducer from './container/store/reducers/auth'
import {
  watchAuth,
  watchBurgerBuilder,
  watchOrder,
} from './container/store/sagas'

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer,
})

const sagaMillderware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMillderware)),
)

sagaMillderware.run(watchAuth)
sagaMillderware.run(watchBurgerBuilder)
sagaMillderware.run(watchOrder)

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
