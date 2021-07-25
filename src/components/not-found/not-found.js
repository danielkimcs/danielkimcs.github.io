import React from 'react';
import './not-found.scss';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
ReactGA.initialize('UA-88938949-5');

export const NotFound = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    });
    return (
        <div className="not-found-container page-container">
            <h3>Sorry, page not found!</h3>
        </div>
    );
}