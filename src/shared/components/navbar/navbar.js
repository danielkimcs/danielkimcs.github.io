import React from 'react';

import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Navbar.Brand>
                            <NavLink to="/">Home</NavLink>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <NavLink to="/projects">Projects</NavLink>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <NavLink to="/archive">Archive</NavLink>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <NavLink to="#">Resume</NavLink>
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}