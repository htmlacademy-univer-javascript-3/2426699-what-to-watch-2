import { FC, useMemo } from 'react';
import { SmallFilmCard } from '../small-film-card/small-film-card.tsx';
import Footer from '../footer/footer.tsx';
import { useAppSelector } from '../../hooks/stores.ts';
import {
  selectSimilarData, selectSimilarError, selectSimilarStatus
} from '../../store/films/film-selectors.ts';
import NotFoundPage from '../../page/not-found/not-found.tsx';
import Spinner from '../spinner/spinner.tsx';

interface ILikeThisProps {
  genre?: string;
}

export const LikeThis: FC<ILikeThisProps> = ({ genre }) => {
  const similar = useAppSelector(selectSimilarData);
  const similarStatus = useAppSelector(selectSimilarStatus);
  const similarError = useAppSelector(selectSimilarError);

  const filmLikeThis = useMemo(() => similar?.filter((film) => film.genre === genre).slice(0, 4), [similar, genre]);

  if (similarError) {
    return <NotFoundPage />;
  }

  if (!similar || similarStatus === 'LOADING') {
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
