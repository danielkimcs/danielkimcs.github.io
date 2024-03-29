import React from "react";
import "./footer.scss";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-text">&copy; 2023 &bull; <span>Daniel Kim</span></div>
            <div className="social-container">
                {/* Add prop bgColor="dark" to change background color of a SocialIcon component */}
                <SocialIcon target="_blank" rel="noreferrer" className="social-icon" style={{ height: 30, width: 30 }} bgColor="black" url="https://www.linkedin.com/in/danielkim119/" />
                <SocialIcon target="_blank" rel="noreferrer" className="social-icon" style={{ height: 30, width: 30 }} bgColor="black" url="https://github.com/danielkimcs/" />
                <SocialIcon target="_blank" rel="noreferrer" className="social-icon" style={{ height: 30, width: 30 }} bgColor="black" url="mailto:dan.kim@yale.edu" />
            </div>
        </div>
    )
}
