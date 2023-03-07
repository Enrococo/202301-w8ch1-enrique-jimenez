import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCharactersList } from './CardListAPI';
import { RootState } from '../../app/store';
import { CharacterResponse } from '../../model/character-model';

export interface CardListState {
  characters: CharacterResponse[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CardListState = {
  characters: [],
  status: 'idle',
};

export const fetchCharacters = createAsyncThunk(
  'cardList/fetchCharacters',
  async () => {
    const response = await getCharactersList();
    return response;
  }
);

export const cardListSlice = createSlice({
  name: 'cardList',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state: { status: string }) => {
        state.status = 'loading';
      })
      .addCase(
        fetchCharacters.fulfilled,
        (state, action: PayloadAction<CharacterResponse[]>) => {
          state.status = 'idle';
          state.characters = action.payload;
        }
      )
      .addCase(fetchCharacters.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectCharacters = (state: RootState) => state.cardList.characters;
export const selectStatus = (state: RootState) => state.cardList.status;

export default cardListSlice.reducer;
