import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

//web
import welcomeReducer from './pages/reducers/welcome'

//h5
import { Main, List, Detail, Login } from './pages/containers'

const reducer = combineReducers({
  welcomeReducer,
  routing: routerReducer
})

const store = createStore(
  reducer,
  compose(
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(browserHistory)
    )
  )
)

const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        
        <Route path="/" component={Main}>
          <IndexRoute component={List} />
          <Route path="list" component={List} />
          <Route path="login" component={Login} />
          <Route path="detail" component={Detail} />
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('content')
)
