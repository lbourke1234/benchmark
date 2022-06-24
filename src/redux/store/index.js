import { configureStore, combineReducers } from '@reduxjs/toolkit'
import searchReducer from '../reducers/searchReducer'

const mainReducer = combineReducers({
  navBar: searchReducer
})

const store = configureStore({
  reducer: mainReducer
})

export default store
