import { waitFor, screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { errorHandlers } from '../../mocks/handlers';
import { server } from '../../mocks/server';
import CardList from './CardList';

describe('Given a card list component', () => {
  beforeAll(() => server.listen());

  afterAll(() => server.close());
  test('When the page is loaded, it should show a list of characters', async () => {
    render(
      <Provider store={store}>
        <CardList />
      </Provider>
    );

    await waitFor(async () => {
      const charactersItems = await screen.findAllByRole('listitem');
      expect(charactersItems.length).toBe(2);
    });
  });

  describe('When the component loads and API responds with error', () => {
    beforeAll(() => server.listen());

    afterAll(() => server.close());
    test('Then it should show loading and later render an error message', async () => {
      server.use(...errorHandlers);
      render(
        <Provider store={store}>
          <CardList />
        </Provider>
      );
      const loading = await screen.findByRole('img');
      expect(loading).toHaveAttribute('alt', 'loading');
      await waitFor(async () => {
        const errorMessage = await screen.findByRole('paragraph');
        expect(errorMessage).toHaveTextContent('Error');
      });
    });
  });
});
