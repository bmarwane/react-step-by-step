import { createStore, combineReducers, applyMiddleware } from 'redux'

import counterReducer from './components/Counter/behaviors'

const reduxChromeExtesionConnection = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducers = {
    counter: counterReducer
}

const combinedReducers  = combineReducers(reducers)

const store = createStore(combinedReducers, {}, reduxChromeExtesionConnection)
export default store