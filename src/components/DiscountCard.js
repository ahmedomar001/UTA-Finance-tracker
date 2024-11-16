import React from 'react';

const DiscountCard = ({ title, description, imageUrl }) => {
  return (
    <div className="discount-card">
      {imageUrl && <img src={imageUrl} alt={title} className="discount-card-img" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default DiscountCard;
