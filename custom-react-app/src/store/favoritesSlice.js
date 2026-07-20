import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // list of product ids the user has marked as favorite/selected
  ids: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      // destructuring + ternary-style ES6 usage
      state.ids = state.ids.includes(id)
        ? state.ids.filter((favId) => favId !== id)
        : [...state.ids, id];
    },
    clearFavorites: (state) => {
      state.ids = [];
    },
  },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;

// selector helpers
export const selectFavoriteIds = (state) => state.favorites.ids;
export const selectFavoriteCount = (state) => state.favorites.ids.length;
export const selectIsFavorite = (id) => (state) =>
  state.favorites.ids.includes(id);

export default favoritesSlice.reducer;
