import { createSlice } from '@reduxjs/toolkit';
import { ReducerName } from '../../types/api';
import { MainReducerState } from '../../types/main-reducer-state';
import { logout, setFavorite } from '../api-actions/api-actions';
import {
  fetchFavoriteFilms,
  fetchPromo
} from '../api-actions/api-actions';

const initialState: MainReducerState = {
  film: null,
  promo: null,
  favoriteFilms: [],
  favoriteCount: 0,
};

export const mainReducer = createSlice({
  name: ReducerName.Main,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.favoriteCount = action.payload.length;
      })
      .addCase(fetchFavoriteFilms.rejected, (state) => {
        state.favoriteFilms = [];
        state.favoriteCount = 0;
      })

      .addCase(setFavorite.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload.isFavorite ? [...state.favoriteFilms, action.payload] : state.favoriteFilms.filter(film => film.id !== action.payload.id);
        state.favoriteCount += action.payload.isFavorite ? 1 : -1;
      })
      .addCase(fetchPromo.fulfilled, (state, action) => {
        state.promo = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.favoriteFilms = [];
        state.favoriteCount = 0;
      })
      
  },
});
