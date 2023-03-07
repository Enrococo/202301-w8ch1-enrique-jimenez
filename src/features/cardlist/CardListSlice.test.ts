import cardlistReducer, { fetchCharacters } from './CardListSlice';

describe('initializer reducer', () => {
  it('should hanldle initial state', () => {
    expect(cardlistReducer(undefined, { type: 'unknown' })).toEqual({
      characters: [],
      status: 'idle',
    });
  });

  it('should handle loading status', () => {
    const loading = cardlistReducer(undefined, fetchCharacters.pending);
    expect(loading.status).toEqual('loading');
  });

  it('should handle failed status', () => {
    const loading = cardlistReducer(undefined, fetchCharacters.rejected);
    expect(loading.status).toEqual('failed');
  });

  it('should handle idle status', () => {
    const loading = cardlistReducer(undefined, fetchCharacters.fulfilled);
    expect(loading.status).toEqual('idle');
  });
});
