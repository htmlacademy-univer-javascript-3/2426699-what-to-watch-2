import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFilm } from '../../types/film.ts';
import { ECatalog } from '../../types/ECatalog.ts';
import { ApiStatusPendingEnum, ApiStatusState, EReducers, initialApiState } from '../../types/api.ts';
import { fetchFilm, fetchMovies, fetchPromo, fetchReviews, fetchSimilar } from '../api-actions/api-actions.ts';
import { setGenre } from '../action/action.ts';
import { TReview } from '../../types/review.ts';
export interface IFilmsState {
  genre: ECatalog;
  films: ApiStatusState<TFilm[]>;
  film: ApiStatusState<TFilm>;
  reviews: ApiStatusState<TReview[]>;
  similar: ApiStatusState<TFilm[]>;
}

const initialState: IFilmsState = {
  genre: ECatalog.All,
  films: initialApiState,
  film: initialApiState,
  reviews: initialApiState,
  similar: initialApiState,
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
      })


      .addCase(fetchFilm.pending, (state) => {
        state.film.apiStatus = ApiStatusPendingEnum.LOADING;
      })
      .addCase(fetchFilm.fulfilled, (state, action: PayloadAction<TFilm>) => {
        state.film.apiStatus = ApiStatusPendingEnum.LOAD;
        state.film.apiData = action.payload;
      })
      .addCase(fetchFilm.rejected, (state, action) => {
        state.film.apiStatus = ApiStatusPendingEnum.ERROR;
        state.film.apiError = action.error.message || 'error';
      })

      .addCase(fetchPromo.pending, (state) => {
        state.film.apiStatus = ApiStatusPendingEnum.LOADING;
      })
      .addCase(fetchPromo.fulfilled, (state, action: PayloadAction<TFilm>) => {
        state.film.apiStatus = ApiStatusPendingEnum.LOAD;
        state.film.apiData = action.payload;
      })
      .addCase(fetchPromo.rejected, (state, action) => {
        state.film.apiStatus = ApiStatusPendingEnum.ERROR;
        state.film.apiError = action.error.message || 'error';
      })

      .addCase(fetchReviews.pending, (state) => {
        state.reviews.apiStatus = ApiStatusPendingEnum.LOADING;
      })
      .addCase(fetchReviews.fulfilled, (state, action: PayloadAction<TReview[]>) => {
        state.reviews.apiStatus = ApiStatusPendingEnum.LOAD;
        state.reviews.apiData = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.reviews.apiStatus = ApiStatusPendingEnum.ERROR;
        state.reviews.apiError = action.error.message || 'error';
      })


      .addCase(fetchSimilar.pending, (state) => {
        state.similar.apiStatus = ApiStatusPendingEnum.LOADING;
      })
      .addCase(fetchSimilar.fulfilled, (state, action: PayloadAction<TFilm[]>) => {
        state.similar.apiStatus = ApiStatusPendingEnum.LOAD;
        state.similar.apiData = action.payload;
      })
      .addCase(fetchSimilar.rejected, (state, action) => {
        state.similar.apiStatus = ApiStatusPendingEnum.ERROR;
        state.similar.apiError = action.error.message || 'error';
      });
  },
});