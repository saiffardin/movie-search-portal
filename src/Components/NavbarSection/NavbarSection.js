import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useHistory} from 'react-router-dom';

const NavbarSection = (props) => {

    const {navBg, genres} = props;
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
                            <Nav.Link onClick={() => routeChangeHandler('/movies')}>Home</Nav.Link>
                            <Nav.Link onClick={() => routeChangeHandler('/wishlist')}>Wishlist</Nav.Link>

                            <NavDropdown title="Genre List">
                                <div style={{height: '200px', overflowY: 'scroll'}}>
                                    {
                                        genres.map((genre) => (
                                            <NavDropdown.Item
                                                key={genre.id}
                                                onClick={() => routeChangeHandler(`/genre/${genre.id}`)}
                                            >
                                                {genre.name}
                                            </NavDropdown.Item>
                                        ))
                                    }
                                </div>

                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarSection;