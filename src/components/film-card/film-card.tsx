import React from 'react';
import { Film } from '../../mocks/films';
import { Link } from 'react-router-dom';


interface FilmCardProps {
  film: Film;
}

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  return (
    <>
      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img src={film.poster} alt={film.title} width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">
          <Link to={`/films/${film.id}`} className="small-film-card__link"> 
            {film.title}
          </Link>
        </h3>
      </article>
    </>
  );
};

export default FilmCard;
