import { FC, useEffect, useMemo } from 'react';
import Footer from '../../components/footer/footer.tsx';
import NotFoundPage from '../not-found/not-found.tsx';
import Spinner from '../../components/spinner/spinner.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/stores.ts';
import { selectFilmsData, selectFilmsError, selectFilmsStatus } from '../../store/films/film-selectors.ts';
import { UserBlock } from '../../components/user-block/user-block.tsx';
import { myFavoriteFilms } from '../../store/main-reducer/main-selectors.ts';
import { fetchFavoriteFilms } from '../../store/api-actions/api-actions.ts';
import { Catalog } from '../../components/catalog/catalog.tsx';

export const MyList: FC = () => {
  const films = useAppSelector(selectFilmsData);
  const filmsError = useAppSelector(selectFilmsError);
  const filmsStatus = useAppSelector(selectFilmsStatus);
  const dispatch = useAppDispatch();

  const favoriteFilms = useAppSelector(myFavoriteFilms);

  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, [dispatch]);

  const memoizedFavoriteFilms = useMemo(() => favoriteFilms, [favoriteFilms]);

  if (filmsError) {
    return <NotFoundPage />;
  }

  if (!films || filmsStatus === 'LOADING') {
    return <Spinner />;
  }

  return (
    <div className="user-page">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <UserBlock className="user-page__head">
          <h1 className="page-title user-page__title">
            My list <span data-testid="favorite-count" className="user-page__film-count">{memoizedFavoriteFilms.length}</span>
          </h1>
        </UserBlock>
        <Catalog withGenres={false} films={memoizedFavoriteFilms} />
      </section>
      <Footer />
    </div>
  );
};
