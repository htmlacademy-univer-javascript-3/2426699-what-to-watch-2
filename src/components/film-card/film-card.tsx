import Buttons from '../buttons/buttons.tsx';
import { UserBlock } from '../user-block/user-block.tsx';
import { FC } from 'react';
import { TFilm } from '../../types/film.ts';
import { useMemo } from 'react';

interface IFilmCardProps {
  film: TFilm;
}

export const FilmCard: FC<IFilmCardProps> = ({ film }) => {
  const memoizedFilm = useMemo(() => film, [film]);

  const { backgroundImage, name, genre, id, posterImage, released, isFavorite } = memoizedFilm;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>

      <UserBlock />
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>
            <div className="film-card__buttons">
              <Buttons.Play filmId={film.id} />
              <Buttons.MyListButton filmId={id} isFavorite={isFavorite} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
