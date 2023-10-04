import React from 'react';
import './HotelDetail.css';

const HotelDetail = ({ hotel, onBack }) => {
  return (
    <div className="hotel-detail">
      <button onClick={onBack}>Back to List</button>
      <img src={hotel.image} alt={hotel.name} />
      <div>
        <h2>{hotel.name}</h2>
        <p><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> {hotel.location}</p>
        <p>${hotel.price} /month</p>
      </div>
    </div>
  );
};

export default HotelDetail;