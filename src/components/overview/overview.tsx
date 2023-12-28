import { FC, useMemo } from 'react';
import { useAppSelector } from '../../hooks/stores.ts';
import { selectFilmsError, selectFilmsStatus } from '../../store/films/film-selectors.ts';
import NotFoundPage from '../../page/not-found/not-found.tsx';
import Spinner from '../spinner/spinner.tsx';
import { selectFilmData } from '../../store/films/film-selectors.ts';
import { useFilmRating } from '../../hooks/stores.ts';

export const Overview: FC = () => {
  const filmsError = useAppSelector(selectFilmsError);
  const filmsStatus = useAppSelector(selectFilmsStatus);
  const film = useAppSelector(selectFilmData);

  if (filmsError) {
    return <NotFoundPage />;
  }

  if (!film || filmsStatus === 'LOADING') {
    return <Spinner />;
  }

  const filmRatingLevel = useMemo(() => useFilmRating(film.rating), [film.rating]);

  return (
    <div className="film-card__desc">
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{filmRatingLevel}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>
        <p className="film-card__starring"><strong>{film.starring}</strong></p>
      </div>
    </div>
  );
};
