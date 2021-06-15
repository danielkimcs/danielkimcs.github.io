import React from 'react';
import './home.scss';

export const Home = () => {
    return (
        <div className="home-container page-container">
            <h1>Hi there! I'm Daniel.</h1>

            <div className="row">
                <p>
                    <img className="avatar" src="/me.jpg" alt="Me" />
                    I'm a sophomore at <a href="https://www.yale.edu/">Yale University</a> studying computer science, economics, and mathematics. For the summer, I'm a Full Stack Associate at <a href="https://www.gosite.com/">GoSite</a>, a Series B startup developing cloud based technology to empower small businesses. [finish intro]
                </p>
            </div>

        </div>
    )
}