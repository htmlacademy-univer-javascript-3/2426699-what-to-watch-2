import { FC, useMemo } from 'react';
import { FilmCard } from '../film-card/film-card.tsx';
import { useAppSelector } from '../../hooks/stores.ts';
import { selectFilmsData } from '../../store/films/film-selectors.ts';

export const FilmList: FC = () => {
  const films = useAppSelector(selectFilmsData);
  const memoizedFilms = useMemo(() => films, [films]);

  return (
    <div className="catalog__films-list">
      {memoizedFilms?.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
};
