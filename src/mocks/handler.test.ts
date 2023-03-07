import { setupServer } from 'msw/node';
import { characterResponseMock } from './character-response-mock';

import { handlers } from './handlers';

// Setup a mock server
const server = setupServer(...handlers);

// Before all tests, start the server
beforeAll(() => server.listen());

// After each test, reset the server and clear all request handlers
afterEach(() => {
  server.resetHandlers();
});

// After all tests, stop the server
afterAll(() => server.close());

describe('GET /api/people', () => {
  test('returns status 200 and an array containing a character', async () => {
    const response = await fetch('https://swapi.dev/api/people/');
    const data = await response.json();
    expect(response.status).toEqual(200);
    expect(data).toEqual(characterResponseMock);
  });
});
