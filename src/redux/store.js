import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import shopsReducer from './reducers/shopsReducer'
import authReducer from './reducers/authReducer'
import filtersReducer from './reducers/filtersReducer'
import auxiliarReducer from './reducers/auxiliarReducer'

const store = createStore( combineReducers({
  shops: shopsReducer,
  auth: authReducer,
  filters: filtersReducer,
  aux: auxiliarReducer
}), applyMiddleware(thunk) )

export default store
