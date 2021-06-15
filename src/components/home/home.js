import React from 'react';
import './home.scss';
import projectsData from '../../shared/projects-data';
import archiveData from '../../shared/archive-data';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Home = () => {
    return (
        <div className="home-container page-container">

            <h1 className="display-3">Hi there! I'm Daniel.</h1>

            <Row>
                <p>
                    <img className="avatar" src="/me.jpg" alt="Me" />
                    I'm a sophomore at <a href="https://www.yale.edu/">Yale University</a> studying computer science, economics, and mathematics. For the summer, I'm a full stack software engineer intern at <a href="https://www.gosite.com/">GoSite</a>, a Series B startup developing cloud based technology to empower small businesses. [finish intro]
                </p>
            </Row>


            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-light" eventKey="0">
                            <p className="h4">Bachelor of Science in Computer Science and Economics</p>
                            <p className="h5">Yale University, Class of 2024</p>
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
                        <Accordion.Toggle as={Button} variant="outline-light" eventKey="1">
                            <p className="h4">High School Diploma</p>
                            <p className="h5">Bergen County Academies – Academy for Technology and Computer Science, Class of 2020</p>
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
        </div>
    )
}