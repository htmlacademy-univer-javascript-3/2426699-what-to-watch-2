import React from 'react';
import FilmCard from '../film-card/film-card';
import { Film } from '../../mocks/films';

interface FilmListProps {
  films: Film[];
  selectedGenre: string; // Add selectedGenre prop
}

const FilmList: React.FC<FilmListProps> = ({ films, selectedGenre }) => {
  const filteredFilms = selectedGenre === 'All genres' ? films : films.filter((film) => film.genre === selectedGenre);

  return (
    <div className="catalog__films-list">
      {filteredFilms.map((film) => (
        <FilmCard key={film.id} films={film} />
      ))}
    </div>
  );
};

export default FilmList;
