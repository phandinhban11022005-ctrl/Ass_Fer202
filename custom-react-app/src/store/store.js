import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";

// LO8: Redux is used here to manage a piece of GLOBAL state (the user's
// favorite/selected products) that needs to be read and updated from many
// different, unrelated components: the ProductItem cards inside
// MainFeature, the ProductDetail page, and the Navbar (which just displays
// a summary count). Passing this through props would require lifting state
// all the way up to App and drilling it through several route components,
// so a global store is the cleaner solution.
export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
