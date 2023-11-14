import { FC } from 'react';
import films from '../../mocks/films.ts';
import FilmCard from '../film-card/film-card.tsx';


interface ILikeThis {
  genre?: string;
}
export const LikeThis: FC<ILikeThis> = ({ genre }) => {

  const filmLikeThis = films.filter((film) => film.genre === genre).slice(0, 4);

  return (
    <>
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <div className="catalog__films-list">
          {filmLikeThis.map((film) => (
            <FilmCard films={film} key={film.id} />
          ))}
        </div>
      </section>
    </>
  );
};
