import React from 'react';
import './home.scss';
import projectsData from '../../shared/projects-data';
import archiveData from '../../shared/archive-data';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import { formatMonthYear } from '../../utils/dateFormat';
// import Button from 'react-bootstrap/Button';

const experiences = [
    {
        position: "Full Stack Associate",
        employer: "GoSite",
        startDate: new Date(2021, 5),
        endDate: null,
        description: ""
    },
    {
        position: "Full Stack Developer",
        employer: "Yale Computer Society",
        startDate: new Date(2020, 9),
        endDate: null,
        description: ""
    },
    {
        position: "Research Intern",
        employer: "Rutgers Discovery Informatics Institute",
        startDate: new Date(2019, 8),
        endDate: new Date(2020, 4),
        description: "Under the mentorship of Dr. Daniel Balouek-Thomert, I studied stream processing between the edge and the cloud. I automated deployment of nodes over remote resources via Python on Grid'5000 (a testbed for experiment-driven research), ran experiments with R-Pulsar (an Edge Framework developed by RDI2), and analyzed datasets via batch processing (Python - Numpy) and stream processing (Apache Flink). I learned a lot about computer networks, distributed systems, and cloud computing."
    },
    {
        position: "Private Mathematics Tutor",
        employer: "",
        startDate: new Date(2019, 3),
        endDate: null,
        description: "I individually tutor grade 10 & 11 students in precalculus, AP Calculus BC, and American Mathematics Competitions (AMC) concepts around 4 hours a week. I review materials from school classes as well as help them prepare for future classes. I often create my own challenging homework problems to reinforce concepts and emphasize problem-solving skills."
    },
    {
        position: "Python Coding Instructor",
        employer: "Gauss Academy of Mathematical Education",
        startDate: new Date(2020, 2),
        endDate: new Date(2020, 3),
        description: "I remotely taught GUI programming in Python (Turtle, Tkinter, Canvas, etc.) as part of a virtual workshop, covering classic examples like tic-tac-toe, Snake, and Guess the Number. I planned course materials, assigned homework, and held lectures via Zoom 3 days a week."
    }
];

// Add sorting for experiences
// First by end date, then start date, then title

export const Home = () => {
    return (
        <div className="home-container page-container">
            <div className="intro">
                <Container>
                    <h1 className="display-3">Hi there! I'm Daniel.</h1>
                    <Row>
                        <p className="lead">
                            <img className="avatar" src="/me.jpg" alt="Me" />
                            I'm a sophomore at <a href="https://www.yale.edu/">Yale University</a> studying computer science, economics, and mathematics. For the summer, I'm a full stack software engineer intern at <a href="https://www.gosite.com/">GoSite</a>, a Series B startup developing cloud based technology to empower small businesses. [finish intro]
                        </p>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className="timeline">
                    <h2>Education</h2>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle eventKey="0">
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
                                <Accordion.Toggle eventKey="1">
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
                </Row>

                <Row className="timeline experience">
                    <h2>Experience</h2>
                    <CardDeck>
                        {experiences.map(exp => (
                            <Card>
                                <Card.Header>
                                    <p className="h4">{exp.position + (exp.employer.length > 0 ? ", " + exp.employer : "")}</p>
                                    <p className="h5">{formatMonthYear(exp.startDate) + " — " + (exp.endDate ? formatMonthYear(exp.endDate) : "present")}</p>
                                </Card.Header>
                                <Card.Body>
                                    <p>{exp.description && exp.description.length > 0 ?  exp.description : "Description will be added"}</p>
                                </Card.Body>
                            </Card>
                        ))}
                    </CardDeck>
                </Row>
            </Container>
        </div>
    )
}