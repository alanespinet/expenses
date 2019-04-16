import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import shopsReducer from './reducers/shopsReducer'
import authReducer from './reducers/authReducer'

const store = createStore( combineReducers({
  shops: shopsReducer,
  auth: authReducer
}), applyMiddleware(thunk) )

export default store
