import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import SearchBar from '../SearchBar';
// import { MyButton as Button } from '../MyButton';
// import Button from 'react-bootstrap/Button';

export default function Top() {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="navbarColor03" >
                <Container fluid>
                <Navbar.Brand 
                    href="#home"
                    as="h1" 
                    className="text-secondary">
                    J O K E S
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    className="btn-secondary bg-secondary text-light">
                    m e n u 
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarCollapse" >
                    <Nav className="me-auto">
                        <Nav.Link href="#home">home</Nav.Link>
                        <Nav.Link href="#info">info</Nav.Link>
                    </Nav>
                    {/* <SearchBar /> */}
                </Navbar.Collapse>
                
                </Container>
            </Navbar>
        </div>

        
    )
}
