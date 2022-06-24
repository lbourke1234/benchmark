import { Card, Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const SingleWeatherRain = () => {
  const data = useSelector((state) => state.navBar.results)
  return (
    data && (
      <Container fluid>
        <Card>
          <Card.Body className="bottom-left-cards">
            <Row>
              <Col>
                <Card.Title>Humidity</Card.Title>
                <Card.Text>Today's humidity levels</Card.Text>
                <Card.Text>{Math.ceil(data.list[0].main.humidity)}%</Card.Text>
              </Col>
              <Col>
                <i className="bi bi-image-alt"></i>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    )
  )
}
export default SingleWeatherRain
