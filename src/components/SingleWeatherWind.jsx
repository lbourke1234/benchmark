import { Card, Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const SingleWeatherWind = () => {
  const data = useSelector((state) => state.navBar.results)
  return (
    data && (
      <Container fluid>
        <Card>
          <Card.Body className="bottom-left-cards">
            <Row>
              <Col>
                <Card.Title>Wind</Card.Title>
                <Card.Text>Today's wind speed</Card.Text>
                <Card.Text>{Math.ceil(data.list[0].wind.speed)} km/h</Card.Text>
              </Col>
              <Col className="d-flex justify-content-center align-items-center">
                <i className="bi bi-wind"></i>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    )
  )
}
export default SingleWeatherWind
