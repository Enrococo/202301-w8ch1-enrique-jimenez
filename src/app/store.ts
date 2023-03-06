import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cardListReducer from '../features/cardlist/CardListSlice';

export const store = configureStore({
  reducer: {
    cardList: cardListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['cardList/fetchCharacters/fulfilled'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg'],
        // Ignore these paths in the state
        ignoredPaths: ['cardList.characters'],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
