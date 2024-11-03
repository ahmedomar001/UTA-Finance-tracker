import React from 'react';
import DiscountCard from '../components/DiscountCard';

const DiscountsPage = () => {
  
  const discounts = [
    { id: 1, title: 'The Pura Vida Sanctuary', description: 'All classes $5 on Mondays. Show student ID at the front' },
    { id: 2, title: 'Montgomery Law', description: '10% Off Attorneys Fees.' },
    { id: 3, title: 'LaserCare Eye Center', description: ' $2000 off LASIK Eye Surgery + Free Consult. Must state UTA discount when scheduling free consult. ' },
    { id: 4, title: 'Alley Cats', description: '$14.99 - Two hours of bowling & $10 Fun Card. $24.99 - 4-Hour Unlimited Fun Pass. $10 for a $20 Fun Card. Must show UTA ID' },
    { id: 5, title: 'Great Clips', description: '$2.00 off any regular priced haircut. Must present with proof of sudent, faculty, or alumni status' },
    { id: 6, title: 'Eves Addiction', description: '20% off any jewelry purchases Enter the promo code UTA20 to apply the discount.' },
    { id: 7, title: 'Orlando Employee Discounts', description: 'Save Up To 35% On Your Orlando Vacation!' },
    { id: 8, title: 'Taco casa', description: '10% off purchase' },
    {id: 9, title: 'Apple', description: 'Special pricing on Macs and iPads for education.'},
    {id: 10, title: 'Microsoft', description: 'Free Office 365 Education for students.'},
    {id: 11, title: 'Adobe', description: 'Get over 60% off on Adobe Creative Cloud.' },
    {id: 12, title: 'Spotify', description: 'Spotify Premium for Students: Includes Spotify, Hulu, and SHOWTIME for only $4.99/month.'},
    {id: 13, title: 'Amazon', description: 'Free Amazon Prime Student membership for six months which includes Prime Video.' },
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
