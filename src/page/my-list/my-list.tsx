import { FC, useCallback } from 'react';
import Footer from '../../components/footer/footer.tsx';
import { FilmCard } from '../../components/film-card/film-card.tsx';
import Logo from '../../components/logo/logo.tsx';
import NotFoundPage from '../not-found/not-found.tsx';
import Spinner from '../../components/spinner/spinner.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/stores.ts';
import { selectFilmsData, selectFilmsError, selectFilmsStatus } from '../../store/films/film-selectors.ts';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/api-actions/api-actions.ts';
import { UserBlock } from '../../components/user-block/user-block.tsx';
import { SmallFilmCard } from '../../components/small-film-card/small-film-card.tsx';


export const MyList: FC = () => {
  const films = useAppSelector(selectFilmsData);
  const filmsError = useAppSelector(selectFilmsError);
  const filmsStatus = useAppSelector(selectFilmsStatus);
  const dispatch = useAppDispatch();
  const history = useNavigate();

  const userLogout = useCallback(() => {
    dispatch(logout());
    history('/login');
  }, [dispatch, history]);

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
            My list <span data-testid="favorite-count" className="user-page__film-count">{/*favoriteFilms.length*/10}</span>
          </h1>
        </UserBlock>
        <div className="catalog__films-list">
          {
            films.map((film) => <SmallFilmCard key={film.id} film={film} />)
          }
        </div>
      </section>

      <Footer />
    </div>
  );
};