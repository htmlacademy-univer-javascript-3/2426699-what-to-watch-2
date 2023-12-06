import { FC } from 'react';
import { SmallFilmCard } from '../small-film-card/small-film-card.tsx';
import Footer from '../footer/footer.tsx';
import { useAppSelector } from '../../hooks/stores.ts';
import { selectFilmsData, selectFilmsError, selectFilmsStatus } from '../../store/films/film-selectors.ts';
import NotFoundPage from '../../page/not-found/not-found.tsx';
import Spinner from '../spinner/spinner.tsx';

interface ILikeThisProps {
  genre?: string;
}
export const LikeThis: FC<ILikeThisProps> = ({ genre }) => {

  const films = useAppSelector(selectFilmsData);
  const filmsError = useAppSelector(selectFilmsError);
  const filmsStatus = useAppSelector(selectFilmsStatus);

  const filmLikeThis = films?.filter((film) => film.genre === genre).slice(0, 4);


  if (filmsError) {
    return <NotFoundPage />;
  }

  if (!films || filmsStatus === 'LOADING') {
    return <Spinner />;
  }
  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <div className="catalog__films-list">
          {filmLikeThis?.map((film) => (
            <SmallFilmCard film={film} key={film.id} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};
