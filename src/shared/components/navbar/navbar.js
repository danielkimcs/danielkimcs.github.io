import React from 'react';
import './navbar.scss';
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import resume from "../../assets/files/resume.pdf";

export const Navigation = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav className="mr-auto">
                        <Navbar.Brand>
                            <NavLink to="/">Daniel Kim</NavLink>
                        </Navbar.Brand>
                    </Nav>
                    <Nav>
                        <Navbar.Brand>
                            <NavLink to="/projects" exact activeClassName="activeLink">Projects</NavLink>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <NavLink to="/archive" exact activeClassName="activeLink">Archive</NavLink>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <a href={resume} target="_blank" rel="noreferrer">Resume</a>
                            {/* <NavLink to="#">Resume</NavLink> */}
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}