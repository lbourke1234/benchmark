import { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { updateSearchAction, fetchNewLocationAction } from '../redux/actions'

const NavBar = () => {
  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Weather App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex align-items-center">
            <Form
              onSubmit={(e) => {
                e.preventDefault()
                dispatch(fetchNewLocationAction(searchText))
              }}
            >
              <Form.Group className="mb-3">
                <Form.Control
                  className="text-input"
                  type="text"
                  placeholder="Enter your location here"
                  onChange={(e) => {
                    dispatch(updateSearchAction(e.target.value))
                    setSearchText(e.target.value)
                  }}
                />
              </Form.Group>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar
