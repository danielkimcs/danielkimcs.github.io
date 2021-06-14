import React from "react";
import "./footer.scss";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
    return (
        <div className="footer-container bg-light">
            <div className="footer-text">&copy; 2021 &bull; <span>Daniel Kim</span></div>
            <div className="social-container">
                <SocialIcon target="_blank" className="social-icon" style={{ height: 30, width: 30 }} bgColor="black" url="https://www.linkedin.com/in/danielkim119/" />
                <SocialIcon target="_blank" className="social-icon" style={{ height: 30, width: 30 }} bgColor="black" url="https://github.com/danielkimcs/" />
                <SocialIcon target="_blank" className="social-icon" style={{ height: 30, width: 30 }} bgColor="black" url="mailto:dan.kim@yale.edu" />
            </div>
        </div>
    )
}
