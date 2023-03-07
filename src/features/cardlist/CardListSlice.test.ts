import cardlistReducer, { fetchCharacters } from './CardListSlice';

describe('initializer reducer', () => {
  it('should hanldle initial state', () => {
    expect(cardlistReducer(undefined, { type: 'unknown' })).toEqual({
      characters: [],
      status: 'idle',
      count: 0,
      currentPage: 0,
    });
  });

  test('should handle loading status', () => {
    const loading = cardlistReducer(undefined, fetchCharacters.pending);
    expect(loading.status).toEqual('loading');
  });

  test('should handle failed status', () => {
    const loading = cardlistReducer(undefined, fetchCharacters.rejected);
    expect(loading.status).toEqual('failed');
  });
});
