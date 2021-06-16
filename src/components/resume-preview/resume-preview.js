import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import './resume-preview.scss';
import resume from '../../shared/assets/files/resume.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const ResumePreview = () => {
    // const [numPages, setNumPages] = useState(null);
    const [containerWidth, setContainerWidth] = useState(-1);

    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            setContainerWidth(ref.current.offsetWidth);
        }
    }, [ref.current]);

    return (
        <Container className="page-container">
            <div className="resume-btn-row">
                <a className="btn" href={resume} target="_blank" rel="noreferrer">Save PDF</a>
            </div>
            <div className="resume-container-wrapper">
                <div ref={ref} className="resume-container">
                    <Document
                        file={resume}
                        className="document-render">
                        <Page pageNumber={1} width={containerWidth > 0 ? containerWidth : null} />
                    </Document>
                </div>
            </div>
        </Container>
    );
}