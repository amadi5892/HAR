import React from 'react';

import './Navigation.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigation = (props) => (
    <div>
        <ul className="nav" >
            <NavigationItem link="/" >Home</NavigationItem>
            <NavigationItem link="/" >Buyers</NavigationItem>
            <NavigationItem link="/" >Sellers</NavigationItem>
            <NavigationItem link="/" >Loan Modification</NavigationItem>
        </ul>
    </div>
);

export default navigation;