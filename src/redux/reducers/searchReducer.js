import {
  FETCH_DAILY_WEATHER,
  FETCH_LIMERICK,
  FETCH_NEW_LOCATION,
  UPDATE_SEARCH
} from '../actions'

const initialState = {
  search: '',
  results: '',
  daily: '',
  hourly: ''
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {
        ...state,
        search: action.payload
      }
    case FETCH_LIMERICK:
      return {
        ...state,
        results: action.payload,
        hourly: action.hourly
      }
    case FETCH_DAILY_WEATHER:
      return {
        ...state,
        daily: action.payload
      }
    case FETCH_NEW_LOCATION:
      return {
        ...state,
        results: action.payload,
        daily: action.daily,
        hourly: action.hourly
      }
    default:
      return state
  }
}

export default searchReducer
