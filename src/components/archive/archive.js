import React, { useState } from 'react';
import './archive.scss';
import { Multiselect } from 'multiselect-react-dropdown';
import archiveData from '../../shared/archive-data';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DocumentCard from './document-card';
import { useAppContext } from "../../utils/contextLib";

const sortable = [
    { name: "Title", property: "title" },
    { name: "Date Modified", property: "date" }
];

let loadedSortable = [...sortable, { name: "Number of Pages", property: "numPages" }];

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
    const appContext = useAppContext();
    const documents = appContext.documents;

    const onTagFilterSelect = (selectedList) => {
        setTagFilters(selectedList);
    }

    const onTagFilterRemove = (selectedList) => {
        setTagFilters(selectedList);
    }

    const onSortSelect = (selectedList, selectedItem) => {
        setSortOptions({ ...sortOptions, property: selectedItem.property });
    }

    const onSortRemove = (selectedList, selectedItem) => {
        setSortOptions({ ...sortOptions, property: selectedItem.property });
    }

    const comparator = (first, second) => {
        let attr = sortOptions.property;
        var key;
        switch (attr) {
            case "title":
                key = first[attr].localeCompare(second[attr]);
                break;
            case "date": // Descending dates = most recent to least recent
            case "numPages":
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
        <Container>
            <div className="archive-container page-container">
                <h1>Archive</h1>
                <Container>
                    <Row className="customization-options">
                        <Col className="search-bar" sm={12} lg={6}>
                            <input type="text" placeholder="Search title or description" onChange={e => setKeywordFilter(e.target.value)} />
                        </Col>
                        <Col sm={12} lg={6} className="filter-dropdown">
                            <Multiselect
                                options={uniques}
                                isObject={false}
                                onSelect={onTagFilterSelect}
                                onRemove={onTagFilterRemove}
                                avoidHighlightFirstOption={true}
                                selectedValues={tagFilters}
                                placeholder="Filter tags"
                                hidePlaceholder={true}
                            />
                        </Col>
                        <Col xs={12} md={9} lg={10} className="sort-options">
                            <Row>
                                <Col xs={2}>
                                    <p className="label">Sort by:</p>
                                </Col>
                                <Col xs={10}>
                                    <Multiselect
                                        options={appContext.done ? loadedSortable : sortable}
                                        displayValue="name"
                                        singleSelect={true}
                                        closeOnSelect={true}
                                        avoidHighlightFirstOption={true}
                                        onSelect={onSortSelect}
                                        onRemove={onSortRemove}
                                        selectedValues={appContext.done ?
                                            loadedSortable.filter(e => e.property === sortOptions.property)
                                            : sortable.filter(e => e.property === sortOptions.property)}
                                        placeholder="Sort by"
                                        hidePlaceholder={true}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={{ span: 6, offset: 3 }} md={{ span: 3, offset: 0 }} lg={{ span: 2, offset: 0 }} className="ascending-checkbox">
                            <p>
                                Ascending:
                            </p>
                            <input
                                type="checkbox"
                                checked={sortOptions.ascending}
                                onChange={() => setSortOptions({ ...sortOptions, ascending: !sortOptions.ascending })}
                            />
                        </Col>
                    </Row>
                    <Row xs={1} md={2} xl={3} className="card-row g-4">
                        {documents.filter(filterDocuments)
                            .sort(comparator)
                            .map((document, index) =>
                                <Col key={document.fileName + index}>
                                    <DocumentCard document={document}></DocumentCard>
                                </Col>)
                        }
                    </Row>
                </Container>
            </div>
        </Container>
    )
}