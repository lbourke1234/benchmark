import { Card, Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const SingleWeatherPressure = () => {
  const data = useSelector((state) => state.navBar.results)
  return (
    data && (
      <Container fluid>
        <Card>
          <Card.Body className="bottom-left-cards">
            <Row>
              <Col>
                <Card.Title>Pressure</Card.Title>
                <Card.Text>Today's pressure</Card.Text>
                <Card.Text>{Math.ceil(data.list[0].main.pressure)} hba</Card.Text>
              </Col>
              <Col>
                <i className="bi bi-cloud"></i>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    )
  )
}
export default SingleWeatherPressure
