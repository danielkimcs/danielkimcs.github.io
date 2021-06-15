import React from 'react';
import parse from 'html-react-parser';
import './project-info.scss';
import link from '../../../shared/assets/images/link.svg';
import { formatMonthYear } from '../../../utils/dateFormat';
import Container from 'react-bootstrap/Container';

export const ProjectInfo = ({ project }) => {
    return (
        <Container>
            <div className="project-info-container page-container">
                <div className="project-title-container">
                    <h2>{project.title}</h2>
                    {project.externalLink.length > 0 ? <a href={project.externalLink} target="_blank" rel="noreferrer noopener" className="button-icon"><img src={link} alt="link" /></a> : null}
                </div>
                <p className="lead">{(project.startDate ? formatMonthYear(project.startDate) + " – " : "") + formatMonthYear(project.endDate)}</p>
                <div className="cover-photo-container">
                    <img src={require("../../../shared/assets/images/" + project.coverPhoto).default} alt={project.title + " Image"} className="cover-photo" />
                </div>
                {parse(project.description)}
            </div>
        </Container>
    )
}