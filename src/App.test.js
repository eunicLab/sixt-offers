import { render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import SingleOffer from './components/SingleOffer';

it('displays error message when fetch fails', async () => {
  const { getByTestId } = render(<App url='https://cdn.sixt.io' />);
  await waitFor(() => {
    const errorMessage = getByTestId('errorMessage');
    expect(errorMessage).toHaveTextContent(
      'Sorry, cannot load page content at this time, please try again later.'
    );
  });
});

it('displays list of offers after successful fetch', async () => {
  const { getByTestId } = render(
    <App url='https://cdn.sixt.io/codingtask/offers.json' />
  );
  const allOffers = getByTestId('allOffers');
  await waitFor(() => {
    expect(allOffers.children.length).toBeGreaterThan(1);
  });
});

it('displays fallback image if error occurs when loading the imageUrl of an offer', () => {
  const item = {
    carGroupInfo: {
      modelExample: {
        imageUrl: '',
        name: 'Audi A4 Avant Aut.',
      },
    },
    prices: { totalPrice: { amount: { display: '247,96', currency: 'EUR' } } },
  };
  const { getByRole } = render(<SingleOffer item={item} />);
  const image = getByRole('img');
  fireEvent.error(image);
  expect(image.src).toContain('fallBackImage.jpeg');
});
