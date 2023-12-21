import { TFilm } from './film';

export interface MainReducerState {
 
  promo: null | TFilm;
  favoriteFilms: TFilm[];
  favoriteCount: number;
}
