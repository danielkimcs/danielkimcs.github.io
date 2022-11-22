import React, { useState } from 'react';
import './navbar.scss';
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import resume from "../../assets/files/resume.pdf";

export const Navigation = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expand="lg" expanded={expanded}>
            <Container>
                <Navbar.Brand>
                    <NavLink onClick={() => setExpanded(false)} to="/">Daniel Kim</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="mr-auto" >
                        <Navbar.Brand>
                            <NavLink onClick={() => setExpanded(false)} to="/projects" exact activeClassName="activeLink">Projects</NavLink>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <NavLink onClick={() => setExpanded(false)} to="/archive" exact activeClassName="activeLink">Archive</NavLink>
                        </Navbar.Brand>
                        {/* <Navbar.Brand>
                            <NavLink onClick={() => setExpanded(false)} to="/resume" exact activeClassName="activeLink">Resume</NavLink>
                        </Navbar.Brand> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}