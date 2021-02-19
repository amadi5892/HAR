import React from 'react';

import './NavigationBar.css'
import Title from '../Logo/Title/Title';
import Navigation from '../Navigation/Navigation';

const navigationBar = (props) => (
    <div className="nav-bar">
        <Title />
        <Navigation />
    </div>
);

export default navigationBar;