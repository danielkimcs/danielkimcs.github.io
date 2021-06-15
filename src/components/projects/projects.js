import React from 'react';
import './projects.scss';
import projectsData from '../../shared/projects-data';
import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const Projects = () => {
    return (
        <div className="projects-container page-container">
            <h1>Projects</h1>

            <Container>
                <Row xs={1} md={2} className="g-4">
                    {projectsData.data.map(project =>
                        <Col><Card className="project-div bg-light h-100">
                            {project.coverPhoto && project.coverPhoto.length > 0 ?
                                (project.externalLink.length > 0 ?
                                    <a href={project.externalLink} target="_blank" rel="noreferrer noopener">
                                        <Card.Img variant="top" src={require("../../shared/assets/images/" + project.coverPhoto).default} alt={project.title + " Image"} />
                                    </a>
                                    : <Card.Img varaint="top" src={require("../../shared/assets/images/" + project.coverPhoto).default} alt={project.title + " Image"} />)
                                : null
                            }
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.preview}</Card.Text>
                                <div className="project-tag-container">
                                    {project.tags.map((tag) => (
                                        <div className="project-tag">
                                            { tag}
                                        </div>
                                    ))}
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                {project.path && project.path.length > 0 ?
                                    <NavLink to={"/projects/" + project.path} class="btn btn-dark">Read more</NavLink>
                                    : (project.externalLink && project.externalLink.length > 0 ?
                                        <a href={project.externalLink} target="_blank" rel="noreferrer noopener" className="btn btn-dark">Check it out</a> : null
                                    )}
                            </Card.Footer>
                        </Card></Col>)
                    }
                </Row>
            </Container>
        </div>
    )
}