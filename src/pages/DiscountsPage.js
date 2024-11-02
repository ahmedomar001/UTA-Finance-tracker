import React from 'react';
import DiscountCard from '../components/DiscountCard';

const DiscountsPage = () => {
  // Placeholder data
  const discounts = [
    { id: 1, title: '15% off on electronics', description: 'Available at XYZ Electronics.' },
    { id: 2, title: '10% off books', description: 'Use at ABC Bookstore.' }
  ];

  return (
    <div>
      <h1>Available Discounts</h1>
      {discounts.map(discount => (
        <DiscountCard key={discount.id} title={discount.title} description={discount.description} />
      ))}
    </div>
  );
}

export default DiscountsPage;
