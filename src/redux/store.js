import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import shopsReducer from './reducers/shopsReducer'
import authReducer from './reducers/authReducer'
import filtersReducer from './reducers/filtersReducer'
import auxiliarReducer from './reducers/auxiliarReducer'
import currentShopReducer from './reducers/currentShopReducer'

const store = createStore( combineReducers({
  shops: shopsReducer,
  auth: authReducer,
  filters: filtersReducer,
  aux: auxiliarReducer,
  currentShop: currentShopReducer
}), applyMiddleware(thunk) )

export default store
