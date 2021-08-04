import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
// import SearchBar from '../SearchBar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
 

import { baseBtnClassName } from '../../modules/baseClassNames'

export default function Top() {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="navbarColor03" >
                <Container fluid>
                <Navbar.Brand 
                    href="/"
                    as="h1" 
                    className="text-secondary">
                    J O K E S
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    as={Button} 
                    className={baseBtnClassName}>
                    m e n u 
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarCollapse" >
                    <Nav className="me-auto">
                        <NavLink className="nav-link" exact to="/">home</NavLink>
                        <NavLink className="nav-link" exact to="/info">info</NavLink>
                        <Nav.Link 
                            href="https://github.com/shaenr/dadjoke-react-app"
                        >
                            github
                        </Nav.Link>

                    </Nav>
                    {/* <SearchBar /> */}
                </Navbar.Collapse>
                
                </Container>
            </Navbar>
        </div>

        
    )
}
