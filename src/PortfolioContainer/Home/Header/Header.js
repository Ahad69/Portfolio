import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="navbar">
            <Navbar expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                    <div class="content">
                        <h3>Ahad</h3>
                        <h3>Ahad</h3>
                    </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" className="text-white link">Home</Nav.Link>
                        <Nav.Link href="#project" className="text-white link ">Project</Nav.Link>
                        <Nav.Link href="#aboutMe" className="text-white link">About Me</Nav.Link>
                        <Nav.Link href="#contract" className="text-white link">Contract</Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
             </Navbar>
        </div>
    );
};

export default Header;