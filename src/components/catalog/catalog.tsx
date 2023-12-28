import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import {GenresItem} from '../genres-item/genres-item.tsx';
import { ECatalog } from '../../types/ECatalog.ts';
import { SmallFilmCard } from '../small-film-card/small-film-card.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/stores.ts';
import { setGenre } from '../../store/action/action.ts';
import NotFoundPage from '../../page/not-found/not-found.tsx';
import Spinner from '../spinner/spinner.tsx';
import {
  currentGenre,
  selectFilmsError,
  selectFilmsStatus
} from '../../store/films/film-selectors.ts';
import { fetchMovies } from '../../store/api-actions/api-actions.ts';
import { TFilm } from '../../types/film.ts';


const VISIBLE_FILMS_COUNT = 8;

interface ICatalogProps {
  withGenres?: boolean;
  films?: TFilm[] | null;
}
export const Catalog: FC<ICatalogProps> = ({withGenres, films}) => {
  const [visibleFilmsCount, setVisibleFilmsCount] = useState(VISIBLE_FILMS_COUNT);
  const activeGenre = useAppSelector(currentGenre);
  const filmsError = useAppSelector(selectFilmsError);
  const filmsStatus = useAppSelector(selectFilmsStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (films === null) {
      dispatch(fetchMovies());
    }
  }, [dispatch, films]);

  const handleSetGenre = useCallback((value: typeof activeGenre) => () => {
    dispatch(setGenre(value));
    setVisibleFilmsCount(VISIBLE_FILMS_COUNT);
  }, [dispatch]);


  const filteredFilms = useMemo(() => {
    if (activeGenre === ECatalog.All) {
      return films;
    }
    return films?.filter((film) => film.genre === activeGenre);
  }, [activeGenre, films]);

  const handleShowMoreClick = useCallback(() => {
    const newVisibleCount = Math.min(visibleFilmsCount + VISIBLE_FILMS_COUNT, filteredFilms?.length || 0);
    setVisibleFilmsCount(newVisibleCount);
  }, [visibleFilmsCount, filteredFilms]);

  const isShowMore = useMemo(() => {
    if (filteredFilms?.length) {
      return filteredFilms?.length - visibleFilmsCount > 0;
    }
    return 0;
  } , [filteredFilms, visibleFilmsCount]);

  if (filmsError) {
    return <NotFoundPage/>;
  }

  if (!films || filmsStatus === 'LOADING') {
    return <Spinner/>;
  }
  const genreList = useMemo(() => ['All genres', ...new Set(films.map((film) => film.genre))], [films]);
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
      {withGenres &&
  genreList?.map((genre) => (
    <GenresItem genre={genre} key={genre} setGenre={handleSetGenre} isActive={ activeGenre === genre} />
  ))}
      </ul>

      <div className="catalog__films-list">
        {filteredFilms?.slice(0, visibleFilmsCount).map((film) => (
          <SmallFilmCard key={film.id} film={film} />
        ))}
      </div>

      {isShowMore && (
        <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={handleShowMoreClick}>
            Show more
          </button>
        </div>
      )}
    </section>
  );
};