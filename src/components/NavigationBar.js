import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavigationBar = () => {
    return(
        <div>
        <Navbar variant='dark' fixed='top'>
            <Container>
                <Navbar.Brand href='/'>HOME</Navbar.Brand>
            <Nav>
                <Nav.Link href='#trending'>TRENDING</Nav.Link>
                <Nav.Link href='#superhero'>SUPERHERO</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar;