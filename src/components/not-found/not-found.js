import React from 'react';
import './not-found.scss';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-88938949-5');
ReactGA.pageview(window.location.pathname + window.location.search);

export const NotFound = () => {
    return (
        <div className="not-found-container page-container">
            <h3>Sorry, page not found!</h3>
        </div>
    );
}