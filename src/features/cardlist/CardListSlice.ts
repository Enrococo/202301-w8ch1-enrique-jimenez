import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCharactersList } from './CardListAPI';
import { RootState } from '../../app/store';
import { CharacterState } from '../../model/character-model';
import { APIStatus } from '../../shared/models/apistatus';

const STATE_NAME = 'cardList';

const initialState: CharacterState = {
  characters: [],
  status: APIStatus.IDLE,
  currentPage: 0,
  count: 0,
};

export const fetchCharacters = createAsyncThunk(
  `${STATE_NAME}/fetchCharacters`,
  async (nextPage: number) => {
    const response = await getCharactersList(nextPage);
    return {
      ...response,
      currentPage: nextPage,
    };
  }
);

export const cardListSlice = createSlice({
  name: STATE_NAME,
  initialState: initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = APIStatus.LOADING;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = APIStatus.IDLE;
        state.characters = action.payload.characters;
        state.count = action.payload.count;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchCharacters.rejected, (state) => {
        state.status = APIStatus.ERROR;
      });
  },
});

export const selectCharacters = (state: RootState) => state.cardList;

export default cardListSlice.reducer;
