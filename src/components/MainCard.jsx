import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import { format, parseISO } from 'date-fns'

const MainCard = () => {
  const data = useSelector((state) => state.navBar.results)

  return data ? (
    <Card className="main-outer-card">
      <Card.Body className="main-card">
        <Card.Text>{format(parseISO(data.list[0].dt_txt), 'dd-LL')}</Card.Text>
        <Card.Title>
          {data.city.name}, {data.city.country}
        </Card.Title>
        <Card.Text>
          <i className="bi bi-cloud-rain-heavy"></i>
          <span className="ml-2">{Math.floor(data.list[0].main.temp)}°</span>
        </Card.Text>
        <Card.Text>
          <span>Feels like :{data.list[0].main.feels_like}</span>
          <span> - </span>
          <span>{data.list[0].weather[0].main}</span>
          <span> - </span>
          <span>Wind speed: {data.list[0].wind.speed} km</span>
        </Card.Text>
        <Card.Text>
          <span>Pa</span>
          <span> - </span>
          <span>Humidity: {data.list[0].main.humidity}</span>
          <span> - </span>
          <span>UV</span>
        </Card.Text>
        <Card.Text>
          <span>{data.list[0].weather[0].description}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <div></div>
  )
}

export default MainCard
