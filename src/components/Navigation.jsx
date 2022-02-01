import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navigation() {
  return <div>
      <Navbar className='nav'>
        <Container>
          <NavLink to='/' >Home</NavLink>
            <Nav className="me-auto">
              <NavLink to='/events'>Events</NavLink>
            </Nav>
            <Nav>
              <NavDropdown title={"Lokalen"} id="collasible-nav-dropdown" >
                <NavDropdown.Item as={NavLink} to="/jeugdhuis">Jeugdhuis</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/openhuis">Openhuis</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          <NavLink to="/contact">Contact</NavLink>
        </Container>
      </Navbar>
  </div>;
}

export default Navigation;