const allOffersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SEND_All_OFFERS':
      return action.payload;

    default:
      return state;
  }
};
export default allOffersReducer;
