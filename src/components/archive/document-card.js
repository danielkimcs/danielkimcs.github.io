import React from 'react';
import Card from 'react-bootstrap/Card';
import { formatDayMonthYear } from '../../utils/dateFormat';
import Spinner from 'react-bootstrap/Spinner';

const DocumentCard = ({ document }) => {
    const openDocument = (fileName) => {
        window.open(require('../../shared/assets/files/archive/' + fileName).default, '_blank');
    }

    return (
        <Card className="document-card bg-light h-100" onClick={() => openDocument(document.fileName)}>
            <Card.Header>{document.title}</Card.Header>
            <Card.Body>
                <div className="tag-container">
                    {document.tags.map((tag) => (
                        <div key={document.fileName + tag} className="tag">
                            {tag}
                        </div>
                    ))}
                </div>
                <Card.Text>
                    {document.description}

                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <div className="float-left">
                    {formatDayMonthYear(document.date)}
                </div>
                <div className="float-right">
                    {"numPages" in document && document["numPages"] ?
                        <span>{document["numPages"] + " pages"}</span> : <Spinner animation="border" className="pages-spinner" />
                    }
                </div>
            </Card.Footer>
        </Card>
    );
}

export default DocumentCard;
