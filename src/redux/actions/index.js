export const UPDATE_SEARCH = 'UPDATE_SEARCH'
export const FETCH_LIMERICK = 'FETCH_LIMERICK'
export const FETCH_DAILY_WEATHER = 'FETCH_DAILY_WEATHER'
export const FETCH_NEW_LOCATION = 'FETCH_NEW_LOCATION'

export const updateSearchAction = (search) => ({
  type: UPDATE_SEARCH,
  payload: search
})
export const fetchLimerickAction = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        'http://api.openweathermap.org/data/2.5/forecast?lat=52.661252&lon=-8.6301239&limit=10&units=metric&appid=9481b60c81fa7d05a594c2b39f059411'
      )
      const body = await response.json()

      const r = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=52.661252&lon=-8.6301239&units=metric&appid=9481b60c81fa7d05a594c2b39f059411`
      )
      const hourly = await r.json()

      dispatch({
        type: FETCH_LIMERICK,
        payload: body,
        hourly: hourly
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const fetchDailyWeatherAction = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        'https://api.openweathermap.org/data/2.5/onecall?lat=53.3497645&lon=-6.2602732&units=metric&appid=9481b60c81fa7d05a594c2b39f059411'
      )
      const body = await response.json()
      dispatch({
        type: FETCH_DAILY_WEATHER,
        payload: body
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const fetchNewLocationAction = (search) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=9481b60c81fa7d05a594c2b39f059411`
      )
      const body = await response.json()

      const resp = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${body[0].lat}&lon=${body[0].lon}&limit=10&units=metric&appid=9481b60c81fa7d05a594c2b39f059411`
      )
      const bod = await resp.json()

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${body[0].lat}&lon=${body[0].lon}&units=metric&appid=9481b60c81fa7d05a594c2b39f059411`
      )
      const b = await res.json()

      const r = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${body[0].lat}&lon=${body[0].lon}&units=metric&appid=9481b60c81fa7d05a594c2b39f059411`
      )
      const s = await r.json()

      dispatch({
        type: FETCH_NEW_LOCATION,
        payload: bod,
        daily: b,
        hourly: s
      })
    } catch (error) {
      console.log(error)
    }
  }
}
