import React, { useState, useEffect } from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { sendAllOffers } from '../actions';
import SingleOffer from './SingleOffer';
import logo from '../images/sixtLogo.png';

let AllOffers = ({ url }) => {
  const [fetchError, setFetchError] = useState('');
  const allOffers = useSelector((state) => state.allOffers);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(sendAllOffers(data.offers));
      })
      .catch(() => {
        setFetchError(
          'Sorry, cannot load page content at this time, please try again later.'
        );
      });
  }, [dispatch, url]);

  let allSixtOffers = allOffers.map((item) => (
    <SingleOffer item={item} key={allOffers.indexOf(item)} />
  ));

  return (
    <div className='App'>
      <div className='jumbotron text-center'>
        <img className='logo' src={logo} alt='logo' />
      </div>
      <div className='allOffers' data-testid='allOffers'>
        {allSixtOffers}
      </div>
      <div
        className={fetchError === '' ? 'noDisplay' : 'errorMessage'}
        data-testid='errorMessage'>
        {fetchError}
      </div>
    </div>
  );
};

export default AllOffers;
