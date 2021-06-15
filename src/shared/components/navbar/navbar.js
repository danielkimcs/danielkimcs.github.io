import React from 'react';
import './navbar.scss';
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import resume from "../../assets/files/resume.pdf";

export const Navigation = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>
                    <NavLink to="/">Daniel Kim</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="mr-auto" >
                        <Navbar.Brand>
                            <NavLink to="/projects" exact activeClassName="activeLink">Projects</NavLink>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <NavLink to="/archive" exact activeClassName="activeLink">Archive</NavLink>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <a href={resume} target="_blank" rel="noreferrer">Resume</a>
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}