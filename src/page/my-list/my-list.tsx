import { FC, useEffect } from 'react';
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
  

  if (filmsError) {
    return <NotFoundPage />;
  }

  if (!films || filmsStatus === 'LOADING') {
    return <Spinner />;
  }
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchFavoriteFilms());
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch]);
  return (
    <div className="user-page">

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <UserBlock className="user-page__head">
          <h1 className="page-title user-page__title">
            My list <span data-testid="favorite-count" className="user-page__film-count">{favoriteFilms.length}</span>
          </h1>
        </UserBlock>
        <Catalog withGenres={false} film={favoriteFilms}/>
      </section>

      <Footer />
    </div>
  );
};