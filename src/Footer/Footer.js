import React from 'react';

import './Footer.css';

const footer = (props) => (
    <div className="footer-container">
        <div className="contact-info">
            <h3 className="contact-heading">Contact Us</h3>
            <ul className="contact-section">
                <li className="contact-list">129-05 Merrick Blvd.<br></br>Jamaica, NY 11434</li>
                <li className="contact-list">(718) 276-9600</li>
                <li className="contact-list">homeaffordablerealty@gmail.com</li>
            </ul>
        </div>
    </div>
);

export default footer;