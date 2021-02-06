import React from 'react';
import AllOffers from './components/AllOffers';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

let App = ({ url }) => {
  const store = createStore(allReducers);

  return (
    <Provider store={store}>
      <AllOffers url={url} />
    </Provider>
  );
};

export default App;
