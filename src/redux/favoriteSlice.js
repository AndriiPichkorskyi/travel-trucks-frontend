import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'favorites',
  initialState: { favorites: [] },
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter(id => id !== payload);
    },
  },
});

export const favoriteReducer = slice.reducer;

export const { addToFavorites, removeFromFavorites } = slice.actions;

export const selectFavorites = state => state.favorites.favorites;
