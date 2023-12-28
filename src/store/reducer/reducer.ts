import { authSlice } from '../auth/auth-slices.ts';
import { filmSlice } from '../films/film-slices.ts';
import { combineReducers } from '@reduxjs/toolkit';
import { EReducers } from '../../types/api.ts';
import { createAction } from '@reduxjs/toolkit';
import { ReducerName } from '../../types/api.ts';
import { mainReducer } from '../main-reducer/main-slices.ts';

export const Actions = {
  SetGenre: '/setGenre',
  SetFilmsLoadStatus: '/setFilmsLoadStatus',
  SetFilms: '/setFilms',
  SetUser: '/setUser',
  SetAuthorizationStatus: '/setAuthorizationStatus',
  SetError: '/setError',
  SetReviews: '/setReviews',
} as const;

export const reducer = combineReducers({
  [EReducers.Auth]: authSlice.reducer,
  [ReducerName.Main]: mainReducer.reducer,
  [EReducers.Films]: filmSlice.reducer,

});

export const setError = createAction(
  Actions.SetError,
  (error: string | null) => ({ payload: error })
);
