import React from 'react';
import { Film } from '../../mocks/films';

interface FilmCardProps {
  film: Film; // Принимаем данные о фильме через props
}

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  return (
    <>
      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img src={film.poster} alt={film.title} width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href={`/films/${film.id}`}>{film.title}</a>
        </h3>
      </article>
    </>
  );
};

export default FilmCard;
