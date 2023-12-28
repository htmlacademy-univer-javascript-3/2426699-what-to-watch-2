import { FC, useEffect } from 'react';
import Footer from '../../components/footer/footer.tsx';
import { FilmCard } from '../../components/film-card/film-card.tsx';
import { Catalog } from '../../components/catalog/catalog.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/stores.ts';
import Spinner from '../../components/spinner/spinner.tsx';
import NotFoundPage from '../not-found/not-found.tsx';
import { 
  selectFilmData,
  selectFilmsData,
  selectFilmsError,
  selectFilmsStatus } from '../../store/films/film-selectors.ts';
import { fetchMovies, fetchPromo } from '../../store/api-actions/api-actions.ts';

export const Main: FC = () => {
  const dispatch = useAppDispatch();
  const film = useAppSelector(selectFilmData);
  const films = useAppSelector(selectFilmsData);
  const filmError = useAppSelector(selectFilmsError);
  const filmStatus = useAppSelector(selectFilmsStatus);

  useEffect(() => {
    dispatch(fetchPromo());
    if (films === null) {
      dispatch(fetchMovies());
    }
  }, [dispatch, films]);

  if (filmError) {
    return <NotFoundPage />;
  }

  if (!film || filmStatus === 'LOADING') {
    return <Spinner />;
  }

  return (
    <>
      <FilmCard film={film} />

      <div className="page-content">
        <Catalog withGenres films={films}/>
        <Footer />
      </div>
    </>
  );
};