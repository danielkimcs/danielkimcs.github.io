import React from 'react';

import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            {/* <Navbar.Brand href="/">Daniel Kim</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Navbar.Brand>
                        <NavLink to="/">Home</NavLink>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <NavLink to="/about">About</NavLink>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <NavLink to="/projects">Projects</NavLink>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <NavLink to="/archive">Archive</NavLink>
                    </Navbar.Brand>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}