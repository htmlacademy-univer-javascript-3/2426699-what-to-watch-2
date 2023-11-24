import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFilm } from '../../types/film.ts';
import { ECatalog } from '../../types/ECatalog.ts';
import { ApiStatusPendingEnum, ApiStatusState, EReducers, initialApiState } from '../../types/api.ts';
import { fetchMovies } from '../action/action.ts';
import { setGenre } from '../action/action.ts';

export interface IFilmsState {
  genre: ECatalog;
  films: ApiStatusState<TFilm[]>;
}

const initialState: IFilmsState = {
  genre: ECatalog.All,
  films: initialApiState,
};

export const filmSlice = createSlice({
  name: EReducers.Films,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setGenre, (state, action) => {
        state.genre = action.payload;
      })

      .addCase(fetchMovies.pending, (state) => {
        state.films.apiStatus = ApiStatusPendingEnum.LOADING;
      })
      .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<TFilm[]>) => {
        state.films.apiStatus = ApiStatusPendingEnum.LOAD;
        state.films.apiData = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.films.apiStatus = ApiStatusPendingEnum.ERROR;
        state.films.apiError = action.error.message || 'error';
      });
  },
});