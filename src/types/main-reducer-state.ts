import { TFilm } from './film';

export interface MainReducerState {
  film: null | TFilm;
  promo: null | TFilm;
  favoriteFilms: TFilm[];
  favoriteCount: number;
}
