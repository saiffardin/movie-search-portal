import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useHistory} from 'react-router-dom';

const NavbarSection = ({navBg}) => {

    const history = useHistory();
    const routeChangeHandler = (route) => {
        history.push(route);
    }

    return (
        <div className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" bg={navBg} variant={navBg}>
                <Container>
                    <Navbar.Brand>Cefalo Movie Portal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link onClick={() => routeChangeHandler('/movies')}>Movies</Nav.Link>
                            <Nav.Link onClick={() => routeChangeHandler('/wishlist')}>Wishlist</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarSection;