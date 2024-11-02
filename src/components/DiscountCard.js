import React from 'react';

const DiscountCard = ({ title, description }) => {
  return (
    <div style={{ margin: '10px', border: '1px solid black', padding: '10px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default DiscountCard;
