import React from 'react';
import parse from 'html-react-parser';
import './project-info.scss';
import link from '../../../shared/assets/images/link.svg';
import { formatMonthYear } from '../../../utils/dateFormat';
import Container from 'react-bootstrap/Container';
import letter from '../../../shared/assets/files/principal_letter.pdf';

export const ProjectInfo = ({ project }) => {
    return (
        <div className="project-info-container page-container">
            <div className="project-info-background">
                <Container className="">
                    <div className="project-title-container">
                        <h2>{project.title}</h2>
                        {project.externalLink.length > 0 ? <a href={project.externalLink} target="_blank" rel="noreferrer noopener" className="button-icon"><img src={link} alt="link" /></a> : null}
                    </div>
                    <p className="lead">{(project.startDate ? formatMonthYear(project.startDate) + " – " : "") + formatMonthYear(project.endDate)}</p>
                    <div className="cover-photo-container">
                        <img src={require("../../../shared/assets/images/" + project.coverPhoto).default} alt={project.title + " Image"} className="cover-photo" />
                    </div>
                    {parse(project.description)}
                    {project.title === "Advanced Precalculus" ?
                        <p>My school's principal wrote a gracious <a href={letter}>letter</a> and my math teacher decided to use it as the official textbook for the class. I also had the opportunity to present my textbook in front of a group of graduate students and professors, who were visiting our high school while the administration was explaining the school’s math curriculum. </p> : null}
                </Container>
            </div>
        </div>
    )
}