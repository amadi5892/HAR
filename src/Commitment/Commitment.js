import React from 'react';

import './Commitment.css';
import Title from './Title/Title';
import Paragraph from './Paragraph/Paragraph';
import CommitmentImage from './CommitmentImage/CommitmentImage';

const commitment = (props) => (
    <div className="commit">
        <Title />
        <Paragraph />
        <CommitmentImage />
    </div>
);

export default commitment;