import React from 'react';

const navgationItem = (props) => (
    <li>
        <a
        href={props.link}
        > {props.children} </a>
    </li>
);

export default navigationItem;