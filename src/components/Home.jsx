import MainCard from './MainCard'
import SingleWeatherDescription from './SingleWeatherDescription'
import { Container, Row, Col } from 'react-bootstrap'
import SingleWeatherWind from './SingleWeatherWind'
import SingleWeatherRain from './SingleWeatherRain'
import SingleWeatherPressure from './SingleWeatherPressure'
import ThisWeekSidebar from './ThisWeekSidebar'
// import GoogleImage from './GoogleImage'

const Home = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <Row>
            <Col>
              <MainCard />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <SingleWeatherDescription />
            </Col>
            <Col md={6}>
              <SingleWeatherWind />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <SingleWeatherRain />
            </Col>
            <Col md={6}>
              <SingleWeatherPressure />
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <ThisWeekSidebar />
        </Col>
      </Row>
    </Container>
  )
}
export default Home
