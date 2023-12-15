import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/stores.ts';
import { selectFilmData, selectFilmsData, selectFilmsError, selectFilmsStatus } from '../../store/films/film-selectors.ts';
import NotFoundPage from '../../page/not-found/not-found.tsx';
import Spinner from '../../components/spinner/spinner.tsx';



export const Details: FC = () => {
  const params = useParams();
  const films = useAppSelector(selectFilmsData);
  const filmsError = useAppSelector(selectFilmsError);
  const filmsStatus = useAppSelector(selectFilmsStatus);
  const film = useAppSelector(selectFilmData);


  if (filmsError || !film) {
    return <NotFoundPage/>;
  }

  if (!films || filmsStatus === 'LOADING') {
    return <Spinner/>;
  }

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {film.starring.join(', ')}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{film.runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film.released}</span>
        </p>
      </div>
    </div>
  );

};