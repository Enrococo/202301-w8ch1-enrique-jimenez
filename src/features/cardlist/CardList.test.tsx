import { waitFor, screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { server } from '../../mocks/server';
import CardList from './CardList';

describe('Given a card list component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('When the page is loaded, it should show a list of characters', async () => {
    render(
      <Provider store={store}>
        <CardList />
      </Provider>
    );

    await waitFor(() => {
      const charactersItems = screen.getAllByRole('listitem');
      expect(charactersItems.length).toBe(10);
    });
  });
});