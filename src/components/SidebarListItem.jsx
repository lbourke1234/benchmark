import { Row, Col, Card } from 'react-bootstrap'

const SidebarListItem = ({ day, index }) => {
  const date = 22
  return (
    <Row className="sidebar-item">
      <Col>
        <Card.Text>{date + index + 1} June</Card.Text>
      </Col>
      <Col>
        <Card.Text>{Math.ceil(day.temp.day)}°</Card.Text>
      </Col>
      <Col>
        <i className="bi bi-umbrella-fill"></i>
      </Col>
    </Row>
  )
}
export default SidebarListItem
