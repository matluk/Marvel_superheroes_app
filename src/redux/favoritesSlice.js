import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    list: localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : [],
  },
  reducers: {
    addItemToFavorites: (state, action) => {
      state.list = [action.payload, ...state.list];
    },
    removeItemFromFavorites: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItemToFavorites, removeItemFromFavorites } =
  favoritesSlice.actions;
export const selectFavorites = (state) => state.favorites.list;
export default favoritesSlice.reducer;
