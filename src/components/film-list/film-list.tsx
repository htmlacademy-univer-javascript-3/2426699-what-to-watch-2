// FilmList.tsx
import React, { useState, useCallback } from 'react';
import FilmCard from '../film-card/film-card';
import ShowMoreButton from '../show-more/show-more';
import { Film } from '../../mocks/films';

interface FilmListProps {
  films: Film[];
  selectedGenre: string;
}

const FilmList: React.FC<FilmListProps> = ({ films, selectedGenre }) => {
  const filteredFilms = selectedGenre === 'All genres' ? films : films.filter((film) => film.genre === selectedGenre);

  const limitedFilms = filteredFilms.slice(0, 8);

  const [visibleFilms, setVisibleFilms] = useState(8);

  const handleLoadMore = useCallback(() => {
    setVisibleFilms((prevVisibleFilms) => prevVisibleFilms + 8);
  }, []);

  return (
    <>
      <div className="catalog__films-list">
  {filteredFilms.slice(0, visibleFilms).map((film) => (
    <FilmCard key={film.id} films={film} />
  ))}
</div>
      <div className="catalog__more">
        <ShowMoreButton totalFilms={films.length} visibleFilms={visibleFilms} onLoadMore={handleLoadMore} />
      </div>
    </>
  );
};

export default FilmList;
