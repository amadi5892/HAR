import React from 'react';

import ClientImage from './ClientImage';

function ClientCard(props) {
    return (
        <div>
            <h5> {props.type} </h5>
            <p> {props.description} </p>
            <ClientImage 
            img={props.img} />
        </div>
    );
};

export default ClientCard;