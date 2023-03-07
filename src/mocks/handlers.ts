import { rest } from 'msw';
import { CharacterMock } from './character-mock';

export const handlers = [
  rest.get('https://swapi.dev/api/people', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json([CharacterMock]));
  }),
];
