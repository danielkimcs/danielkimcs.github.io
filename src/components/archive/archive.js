import React from 'react';
import './archive.scss';
import archiveData from '../../shared/archive-data';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { formatDayMonthYear } from '../../utils/dateFormat';

export const Archive = () => {
    const openDocument = (fileName) => {
        window.open(require('../../shared/assets/files/archive/' + fileName).default, '_blank');
    }

    return (
        <div className="archive-container page-container">
            <h1>Archive</h1>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {archiveData.data.sort((first, second) => second.date - first.date)
                        .map(document =>
                            <Col>
                                <Card className="document-card bg-light h-100" onClick={() => openDocument(document.fileName)}>
                                    <Card.Header>{document.title}</Card.Header>
                                    <Card.Body>
                                        <div className="tag-container">
                                            {document.tags.map((tag) => (
                                                <div className="tag">
                                                    { tag}
                                                </div>
                                            ))}
                                        </div>
                                        <Card.Text>{document.description}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        {formatDayMonthYear(document.date)}
                                    </Card.Footer>
                                </Card>
                            </Col>)
                    }
                </Row>
            </Container>
        </div>
    )
}