import React, { useEffect } from "react";
import "./home.scss";
// import projectsData from '../../shared/projects-data';
// import archiveData from '../../shared/archive-data';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import experiencesData from "../../shared/experiences-data";
import Image from "react-bootstrap/Image";
// import { Parallax } from 'react-scroll-parallax';
import { Controller, Scene } from "react-scrollmagic";
import { formatMonthYear } from "../../utils/dateFormat";
import profilePic from "../../shared/assets/images/me.jpeg";
// import Button from 'react-bootstrap/Button';
import YaleLogo from "../../shared/assets/images/yale.jpeg";
import BCALogo from "../../shared/assets/images/bca.png";

import ReactGA from "react-ga";
ReactGA.initialize("UA-88938949-5");

let experiences = experiencesData.data;

// Add sorting for experiences
// First by end date, then start date, then title

export const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

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
                  I'm a rising senior at{" "}
                  <a href="https://www.yale.edu/">Yale University</a> studying
                  in computer science and mathematics, with broad experience in
                  application development, especially in full stack web. This
                  summer, I'll be interning as a software engineer at{" "}
                  <a href="https://optiver.com/">Optiver</a>. Previously, I've
                  scoped and built out many external, user-facing web features
                  throughout software engineering internships at{" "}
                  <a href="https://www.metacareers.com/">Meta (Facebook)</a> on
                  their recruiting products and at{" "}
                  <a href="https://www.gosite.com/">GoSite</a> on their software
                  suite for small business owners.
                  <br />
                  Previously, at Yale, I helped build infrastructure for the{" "}
                  <a href="https://www.internships.yesatyale.org/">
                    YES Internship Program
                  </a>{" "}
                  using ReactJS and Amazon Web Services.
                  <br />
                  <br />
                  Besides coding, I've written a bunch of{" "}
                  <NavLink to={"/archive"}>math notes</NavLink>, including a{" "}
                  <NavLink to={"/projects/adv-precalc"}>textbook</NavLink> on
                  proof-based precalculus and introductory calculus concepts.
                  <br />
                  <br />
                  You can contact me at{" "}
                  <a href="mailto:dan.kim@yale.edu">dan.kim@yale.edu</a> or
                  connect on{" "}
                  <a href="https://www.linkedin.com/in/danielkim119/">
                    LinkedIn
                  </a>
                  !
                </p>
              </Row>
            </div>
          </Container>
        </div>
        <Container>
          <Scene
            triggerElement=".timeline"
            triggerHook={1}
            // reverse={false}
            classToggle="visible"
          >
            <Row className="timeline fadeIn">
              <h2 className="text-center mb-4">Education</h2>
              <Container>
                <Row className="education-entry">
                  <Col
                    xs={2}
                    className="d-flex justify-content-center align-items-center company-logo-container"
                  >
                    <div className="company-logo">
                      <Image src={YaleLogo} />
                    </div>
                  </Col>
                  <Col>
                    <Card className="education-card">
                      <Card.Header>
                        <p className="h4">
                          Bachelor of Science in Computer Science, Mathematics
                        </p>
                        <p className="h5">
                          Yale University, September 2020 – May 2024
                        </p>
                      </Card.Header>
                      <Card.Body>
                        <p>
                          <span>Coursework:</span> Intensive Algorithms, Machine
                          Learning, Quantum Computing, Big Data Systems, Systems
                          Programming and Computer Organization, Artificial
                          Intelligence, Data Structures and Programming
                          Techniques, Theory of Statistics, Probability Theory,
                          Discrete Mathematics, Real & Complex Analysis, Vector
                          Calculus and Linear Algebra
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="education-entry">
                  <Col
                    xs={2}
                    className="d-flex justify-content-center align-items-center company-logo-container"
                  >
                    <div className="company-logo">
                      <Image src={BCALogo} />
                    </div>
                  </Col>
                  <Col>
                    <Card className="education-card">
                      <Card.Header>
                        <p className="h4">High School Diploma</p>
                        <p className="h5">
                          Bergen County Academies – Academy for Technology and
                          Computer Science, September 2016 - June 2020
                        </p>
                      </Card.Header>
                      {/* <Card.Body>
                        <p>
                          <span>Activities:</span> Problem Writer, Lecturer,
                          Webmaster of Math Team; Committee Member and Webmaster
                          for the Joe Holbrook Memorial Math Competition (400+
                          annual participants); American Computer Science League
                          (ACSL) Participant; Competitive Programming (USACO);
                          Webmaster for BCA Flash; Varsity Bowling Team
                        </p>

                        <p>
                          <span>Coursework:</span> Advanced Math Topics, Data
                          Structures, Advanced Topics in Computer Science, AP
                          Analytical Calculus (BC+), AP Computer Science A,
                          Advanced Precalculus with Discrete Topics,
                          Mathematical Structures and Proofs, AP Chemistry, AP
                          Physics C
                        </p>
                      </Card.Body> */}
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Row>
          </Scene>
          <Row className="timeline experience">
            <Scene
              triggerHook={0.9}
              // reverse={false}
              classToggle="visible"
            >
              <h2 className="fadeIn text-center mb-4">Experience</h2>
            </Scene>
            <CardDeck>
              {experiences.map((exp, index) => (
                <div key={index}>
                  <Scene
                    triggerHook={0.9}
                    offset={50}
                    // reverse={false}
                    classToggle="visible"
                  >
                    <div className="fadeIn">
                      <Row className="experience-entry">
                        {exp.image ? (
                          <Col
                            xs={2}
                            className="d-flex justify-content-center align-items-center company-logo-container"
                          >
                            <div className="company-logo">
                              <Image
                                src={process.env.PUBLIC_URL + "/" + exp.image}
                              />
                            </div>
                          </Col>
                        ) : null}
                        <Col>
                          <Card>
                            <Card.Header>
                              <p className="h4">
                                {exp.position +
                                  (exp.employer.length > 0
                                    ? ", " + exp.employer
                                    : "")}
                              </p>
                              <p className="h5 exp-date">
                                {formatMonthYear(exp.startDate) +
                                  " — " +
                                  (exp.endDate
                                    ? formatMonthYear(exp.endDate)
                                    : "present")}
                              </p>
                              <p className="h5 exp-location">{exp.location}</p>
                            </Card.Header>
                            <Card.Body>
                              <p>
                                {exp.description && exp.description.length > 0
                                  ? exp.description
                                  : "Description will be added"}
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </Scene>
                </div>
              ))}
            </CardDeck>
          </Row>
        </Container>
      </Controller>
    </div>
  );
};
