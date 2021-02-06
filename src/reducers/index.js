import { combineReducers } from 'redux';
import allOffersReducer from './allOffers';

const allReducers = combineReducers({
  allOffers: allOffersReducer,
});

export default allReducers;
