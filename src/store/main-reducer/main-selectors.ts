import { RootState } from "../index";

export const selectCount = (state: RootState) => state.reducer.mainReducer;
export const countFavoriteFilm = (state: RootState) => selectCount(state).favoriteCount;
export const myFavoriteFilms = (state: RootState) => selectCount(state).favoriteFilms;