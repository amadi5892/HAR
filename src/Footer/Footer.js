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
        <div className="message-info">
            <h3 className="contact-heading">Leave Us A Message</h3>
            <form>
                <input placeholder="Name"></input>
                <input placeholder="Phone"></input>
                <input placeholder="Email"></input>
                <textarea placeholder="How Can We Help?"></textarea>
            </form>
        </div>
    </div>
);

export default footer;