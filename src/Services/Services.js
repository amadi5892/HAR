import React from 'react';

import './Services.css';
import greyCouch from '../images/grey_couch.jpg';

const services = (props) => (
    <div className="service-container">
        <h3 className="heading">Buyers & Sellers</h3>
        <div className="card-1">
            <h4 className="sub-heading">Buyers</h4>
            <p className="service-para">We take pride in being apart of your exciting journey to find your dream home. Home Affordable Realty gives you the best experience possible. Our agents work day and night to find you the best place for new beginnings.</p>
            <button className="service-btn">Learn More</button>
            <img src={greyCouch} alt="Cozy Window View" className="service-img" />
        </div>
    </div>
);

export default services;