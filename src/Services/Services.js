import React from 'react';

import './Services.css';
import Clients from './Clients/Clients';
import ClientCard from './ClientCard/ClientCard';

function createClient(Clients) {
    return (
        <div className="organize">
            <ClientCard 
            key={Clients.id}
            type={Clients.type}
            img={Clients.image}
            description={Clients.description} 
            />
        </div>
    );
};

function Services() {
    return (
        <div className="service-container">
            <h3>
                <span className="heading">Buyers & Sellers</span>
            </h3>

            <d1>
                {Clients.map(createClient)}
            </d1>
        </div>
    );
};

export default Services;