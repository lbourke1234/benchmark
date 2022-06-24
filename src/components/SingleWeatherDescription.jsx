import { Card, Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const SingleWeatherDescription = () => {
  const data = useSelector((state) => state.navBar.results)
  return (
    data && (
      <Container fluid>
        <Card className="mb-4">
          <Card.Body className="bottom-left-cards">
            <Row>
              <Col>
                <Card.Title>Feels Like</Card.Title>
                <Card.Text>Today feels like</Card.Text>
                <Card.Text>{Math.ceil(data.list[0].main.feels_like)}°</Card.Text>
              </Col>
              <Col className="d-flex justify-content-center align-items-center">
                <i className="bi bi-emoji-sunglasses"></i>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    )
  )
}
export default SingleWeatherDescription
