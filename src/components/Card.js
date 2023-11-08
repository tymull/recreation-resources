import React from 'react';
import './Card.css';

const Card = ({ contentSection }) => {
  return (
    <div className="card">
      {contentSection}
    </div>
  );
}

export default Card;
