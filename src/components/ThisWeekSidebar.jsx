import { Card, Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import SidebarListItem from './SidebarListItem'

import { parseISO, format } from 'date-fns'

const ThisWeekSidebar = () => {
  const daily = useSelector((state) => state.navBar.daily)
  const hourly = useSelector((state) => state.navBar.hourly)
  console.log('hourly', hourly)
  return (
    <>
      {hourly && (
        <Card className="sidebar-card-outer">
          <Card.Body className="sidebar-card-body">
            <Card.Title className="mb-4">This Week</Card.Title>
            <Container>
              <Row className="sidebar-icon-row">
                <Col className="sidebar-icon-col">
                  <span>{format(parseISO(hourly.list[0].dt_txt), 'dd-LL')}</span>
                  <i className="bi bi-sun"></i>
                  <span>{Math.ceil(hourly.list[0].main.temp)}°</span>
                </Col>
                <Col className="sidebar-icon-col">
                  <span>{format(parseISO(hourly.list[1].dt_txt), 'dd-LL')}</span>
                  <i className="bi bi-sun"></i>
                  <span>{Math.ceil(hourly.list[1].main.temp)}°</span>
                </Col>
                <Col className="sidebar-icon-col">
                  <span>{format(parseISO(hourly.list[2].dt_txt), 'dd-LL')}</span>
                  <i className="bi bi-sun"></i>
                  <span>{Math.ceil(hourly.list[2].main.temp)}°</span>
                </Col>
                <Col className="sidebar-icon-col">
                  <span>{format(parseISO(hourly.list[3].dt_txt), 'dd-LL')}</span>
                  <i className="bi bi-sun"></i>
                  <span>{Math.ceil(hourly.list[3].main.temp)}°</span>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      )}

      {/* bottom half */}
      {daily && (
        <Card>
          <Card.Body>
            <Container>
              {daily.daily.map((day, i) => {
                return <SidebarListItem key={i} index={i} day={day} />
              })}
            </Container>
          </Card.Body>
        </Card>
      )}
    </>
  )
}
export default ThisWeekSidebar
