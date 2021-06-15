import React, { useState } from 'react';
import './archive.scss';
import { Multiselect } from 'multiselect-react-dropdown';
import archiveData from '../../shared/archive-data';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { formatDayMonthYear } from '../../utils/dateFormat';
import { Form } from 'react-bootstrap';

let uniques = new Set();
for (const document of archiveData.data) {
    for (const tag of document.tags) {
        uniques.add(tag);
    }
}

uniques = [...uniques];

export const Archive = () => {
    const [sortOptions, setSortOptions] = useState({ property: "date", ascending: false });
    const [keywordFilter, setKeywordFilter] = useState("");
    const [tagFilters, setTagFilters] = useState([]);

    const openDocument = (fileName) => {
        window.open(require('../../shared/assets/files/archive/' + fileName).default, '_blank');
    }

    const onSelect = (selectedList) => {
        setTagFilters(selectedList);
    }

    const onRemove = (selectedList) => {
        setTagFilters(selectedList);
    }

    const comparator = (first, second) => {
        let attr = sortOptions.property;
        var key;
        switch (attr) {
            case "title":
                key = first[attr].localeCompare(second[attr]);
                break;
            case "date": // Descending dates = most recent to least recent
                key = first[attr] - second[attr];
                break;
            default:
                key = first[attr] - second[attr];
                break;
        }

        if (sortOptions.ascending) {
            return key;
        } else {
            return -key;
        }
    }

    const filterDocuments = (document) => {
        if (keywordFilter.length > 0) {
            let search = keywordFilter.trim().toLowerCase();
            if (!document.title.toLowerCase().includes(search) && !document.description.toLowerCase().includes(search)) {
                return false
            }
        }
        if (tagFilters.length > 0) {
            if (!document.tags.some(tag => tagFilters.includes(tag))) {
                return false;
            }
        }
        return true;
    }

    return (
        <div className="archive-container page-container">
            <h1>Archive</h1>
            <Container>
                <Row>
                    <Form.Control type="text" placeholder="Search keyword" onChange={e => setKeywordFilter(e.target.value)} />
                </Row>
                <Row>
                    <Multiselect
                        options={uniques}
                        isObject={false}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        avoidHighlightFirstOption={true}
                        selectedValues={tagFilters}
                        placeholder="Filter tags"
                        hidePlaceholder={true}
                    />
                </Row>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {archiveData.data.sort(comparator)
                        .filter(filterDocuments)
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