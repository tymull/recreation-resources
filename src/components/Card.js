import React from 'react';
import './Card.css';

const Card = ({ contentSection }) => {
  return (
    <div className="card">
      <p>{contentSection}</p>
    </div>
  );
}

export default Card;
