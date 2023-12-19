import { combineReducers } from "redux";

import moviesReducer from "./movieReducer";
import favoritesReducer from "./favoriteReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
