import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import { fetchLimerickAction } from './redux/actions'
import { fetchDailyWeatherAction } from './redux/actions'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchLimerickAction())
    dispatch(fetchDailyWeatherAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
