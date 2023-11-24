import { FC, useEffect } from 'react';
import Footer from '../../components/footer/footer.tsx';
import { FilmCard } from '../../components/film-card/film-card.tsx';
import { Catalog } from '../../components/catalog/catalog.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/stores.ts';
import Spinner from '../../components/spinner/spinner.tsx';
import NotFoundPage from '../not-found/not-found.tsx';
import { selectFilmsData, selectFilmsError, selectFilmsStatus } from '../../store/films/film-selectors.ts';
import { fetchMovies } from '../../store/api-actions/api-actions.ts';

export const Main: FC = () => {
  const dispatch = useAppDispatch();
  const films = useAppSelector(selectFilmsData);
  const filmsError = useAppSelector(selectFilmsError);
  const filmsStatus = useAppSelector(selectFilmsStatus);

  useEffect(() => {
    if (films === null) {
      dispatch(fetchMovies());
    }
  }, [dispatch, films]);

  if (filmsError) {
    return <NotFoundPage/>;
  }

  if (!films || filmsStatus === 'LOADING') {
    return <Spinner/>;
  }

  return (<>
    <FilmCard film={films[0]} />

    <div className="page-content">
      <Catalog withGenres />
      <Footer/>
    </div>
  </>);
};