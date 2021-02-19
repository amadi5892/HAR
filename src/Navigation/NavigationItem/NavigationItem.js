import React from 'react';

import './NavigationItem.css'

const navigationItem = (props) => (
    <li className="nav-item">
        <a> {props.children} </a>
    </li>
);

export default navigationItem;