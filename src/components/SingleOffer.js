import React from 'react';
import '../App.css';
import fallBackImage from '../images/fallBackImage.jpeg';

let SingleOffer = ({ item }) => {
  let handleError = (e) => {
    e.target.src = fallBackImage;
  };

  return (
    <div className='card'>
      <img
        className='card-img-top'
        src={item.carGroupInfo.modelExample.imageUrl}
        onError={handleError}
        alt='car visual'
      />
      <div className='card-footer'>
        <p className='card-title'>
          <b>{item.carGroupInfo.modelExample.name}</b>
        </p>
        <span className='price'>{item.prices.totalPrice.amount.display}</span>
        <span>{item.prices.totalPrice.amount.currency}</span>
      </div>
    </div>
  );
};
export default SingleOffer;
