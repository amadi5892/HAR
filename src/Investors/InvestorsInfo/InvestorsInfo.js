import React from 'react';

import './InvestorsInfo.css';
import sunBuilding from '../../images/sun_hits_building.jpg';

const investorsInfo = (props) => (
    <div className="invest-info">
        <div className="invest-card">
            <h3 className="invest-heading">Investors</h3>
            <p className="invest-para">
            Home Affordable Realty doesn't let any opportunities go to waste when it comes to your investments. Your investments means everything to us and we make sure you're ROI will be worth all of your time and energy. Your wish is our command.
            </p>
        </div>
        <div className="invest-img">
            <img src={sunBuilding} alt="Sunset Hitting Building" className="invest-img" />
        </div>
    </div>
);

export default investorsInfo;

// Home Affordable Realty doesn't let any opportunities go to waste when it comes to your investments. Your investments means everything to us and we make sure you're ROI will be worth all of your time and energy. Your wish is our command.