import { Film } from '../../mocks/films';
import { Link } from 'react-router-dom';
import { FC } from 'react';

interface FilmCardProps {
  films: Film;
}

const FilmCard: FC<FilmCardProps> = (props) => {
  const {films} = props;
  return (
    <>
      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img src={films.poster} alt={films.title} width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">
          <Link to={`/films/${films.id}`} className="small-film-card__link"> 
            {films.title}
          </Link>
        </h3>
      </article>
    </>
  );
};

export default FilmCard;
