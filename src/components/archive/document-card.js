import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Document, pdfjs } from 'react-pdf';
import { formatDayMonthYear } from '../../utils/dateFormat';
import Spinner from 'react-bootstrap/Spinner';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const DocumentCard = ({ document }) => {
    const [numPages, setNumPages] = useState(null);

    const openDocument = (fileName) => {
        window.open(require('../../shared/assets/files/archive/' + fileName).default, '_blank');
    }

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }


    useEffect(() => {
        setNumPages(null);
    }, [document]);

    return (
        <Card className="document-card bg-light h-100" onClick={() => openDocument(document.fileName)}>
            <Card.Header>{document.title}</Card.Header>
            <Card.Body>
                <div className="tag-container">
                    {document.tags.map((tag) => (
                        <div key={document.fileName+tag} className="tag">
                            {tag}
                        </div>
                    ))}
                </div>
                <Card.Text>
                    {document.description}
                    <Document
                        file={{ url: require('../../shared/assets/files/archive/' + document.fileName).default }}
                        onLoadSuccess={onDocumentLoadSuccess}
                        className="document-render">
                    </Document>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <div className="float-left">
                    {formatDayMonthYear(document.date)}
                </div>
                <div className="float-right">
                    {numPages ?
                        <span>{ numPages + " pages" }</span> : <Spinner animation="border" className="pages-spinner"/>
                }
                </div>
            </Card.Footer>
        </Card>
    );
}

export default DocumentCard;
