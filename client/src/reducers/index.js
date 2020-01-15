import getTailorsReducer from './getTailors'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  getTailors: getTailorsReducer,
  error: errorReducer,
  auth: authReducer
})

export default allReducers
