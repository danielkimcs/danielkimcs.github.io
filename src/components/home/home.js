import React from 'react';
import './home.scss';
// import projectsData from '../../shared/projects-data';
// import archiveData from '../../shared/archive-data';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import experiencesData from '../../shared/experiences-data';
// import { Parallax } from 'react-scroll-parallax';
import { Controller, Scene } from 'react-scrollmagic';
import { formatMonthYear } from '../../utils/dateFormat';
import profilePic from '../../shared/assets/images/me.jpg';
// import Button from 'react-bootstrap/Button';

let experiences = experiencesData.data;

// Add sorting for experiences
// First by end date, then start date, then title

export const Home = () => {
    return (
        <div className="home-container page-container">
            <Controller>
                <div className="intro">
                    <Container>
                        <div>
                            <h1 className="display-3">Hi there! I'm Daniel.</h1>
                            <Row>
                                <p className="lead">
                                    <img className="avatar" src={profilePic} alt="Me" />
                                    I'm a sophomore at <a href="https://www.yale.edu/">Yale University</a> interested in computer science, economics, and mathematics. For the summer, I'm a full stack software engineer intern at <a href="https://www.gosite.com/">GoSite</a>, a Series B startup developing cloud based technology to empower small businesses. At Yale, I help build infrastructure for the <a href="https://www.internships.yesatyale.org/">YES Internship Program</a> using ReactJS and Amazon Web Services. I've also written lots of <NavLink to={"/archive"}>math notes</NavLink>, including a <NavLink to={"/projects/adv-precalc"}>textbook</NavLink> on proof-based precalculus and introductory calculus concepts.
                                    <br /><br />
                                    You can contact me at <a href="mailto:dan.kim@yale.edu">dan.kim@yale.edu</a> or find me on <a href="https://www.linkedin.com/in/danielkim119/">LinkedIn</a>.
                                </p>
                            </Row>
                        </div>
                    </Container>
                </div>
                <Container>
                    <Scene triggerElement=".accordion"
                        triggerHook={1}
                        // reverse={false}
                        classToggle="visible">
                        <Row className="timeline fadeIn">
                            <h2>Education</h2>
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle eventKey="0">
                                            <p className="h4">Bachelor of Science in Computer Science and Economics</p>
                                            <p className="h5">Yale University, September 2020 – May 2024</p>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <p>
                                                <span>Coursework:</span> Artificial Intelligence (CPSC 470), Data Structures and Programming Techniques (CPSC 223), Introductory Macroeconomics (ECON 116), Introductory Microeconomics (ECON 115), Systems Programming and Computer Organization (CPSC 323)
                                            </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle eventKey="1">
                                            <p className="h4">High School Diploma</p>
                                            <p className="h5">Bergen County Academies – Academy for Technology and Computer Science, September 2016 - June 2020</p>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <p>
                                                <span>Activities:</span> Problem Writer, Lecturer, Webmaster of Math Team; Committee Member and Webmaster for the Joe Holbrook Memorial Math Competition (400+ annual participants); American Computer Science League (ACSL) Participant; Competitive Programming (USACO); Webmaster for BCA Flash; Varsity Bowling Team
                                            </p>

                                            <p>
                                                <span>Coursework:</span> Advanced Math Topics, Data Structures, Advanced Topics in Computer Science, AP Analytical Calculus (BC+), AP Computer Science A, Advanced Precalculus with Discrete Topics, Mathematical Structures and Proofs, AP Chemistry, AP Physics C
                                            </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Row>
                    </Scene>
                    <Row className="timeline experience">
                        <Scene triggerHook={0.9}
                            // reverse={false}
                            classToggle="visible">
                            <h2 className="fadeIn">Experience</h2>
                        </Scene>
                        <CardDeck>
                            {experiences.map((exp, index) => (
                                <div key={index}>
                                    <Scene triggerHook={0.9}
                                        offset={50}
                                        // reverse={false}
                                        classToggle="visible">
                                        <div className="fadeIn">
                                            <Card>
                                                <Card.Header>
                                                    <p className="h4">{exp.position + (exp.employer.length > 0 ? ", " + exp.employer : "")}</p>
                                                    <p className="h5 exp-date">{formatMonthYear(exp.startDate) + " — " + (exp.endDate ? formatMonthYear(exp.endDate) : "present")}</p>
                                                    <p className="h5 exp-location">{exp.location}</p>
                                                </Card.Header>
                                                <Card.Body>
                                                    <p>{exp.description && exp.description.length > 0 ? exp.description : "Description will be added"}</p>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Scene>
                                </div>
                            ))}
                        </CardDeck>
                    </Row>
                </Container>
            </Controller>
        </div>
    )
}