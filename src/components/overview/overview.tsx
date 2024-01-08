import { FC } from 'react';
import { useAppSelector } from '../../hooks/stores.ts';
import { selectFilmsError, selectFilmsStatus, selectFilmData } from '../../store/films/film-selectors.ts';
import NotFoundPage from '../../page/not-found/not-found.tsx';
import Spinner from '../spinner/spinner.tsx';
import { useFilmRating } from '../../hooks/stores.ts';

export const Overview: FC = () => {
  const filmsError = useAppSelector(selectFilmsError);
  const filmsStatus = useAppSelector(selectFilmsStatus);
  const film = useAppSelector(selectFilmData);
  const rating = film?.rating || 0;
  const filmRatingLevel = useFilmRating(rating);

  if (filmsError) {
    return <NotFoundPage />;
  }

  if (!film || filmsStatus === 'LOADING') {
    return <Spinner />;
  }

  return (
    <div className="film-card__desc">
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
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
