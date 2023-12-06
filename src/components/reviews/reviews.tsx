import { FC, useMemo } from 'react';
import { TReview } from '../../types/review.ts';
import { useParams } from 'react-router-dom';
import NotFoundPage from '../../page/not-found/not-found.tsx';
import { useAppSelector } from '../../hooks/stores.ts';
import { selectFilmsData, selectFilmsError, selectFilmsStatus } from '../../store/films/film-selectors.ts';
import Spinner from '../spinner/spinner.tsx';


interface IReviewItemProps {
  review: TReview;
}
const Review: FC<IReviewItemProps> = ({review}) => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{review?.comment}</p>
      <footer className="review__details">
        <cite className="review__author">{review?.user}</cite>
        <time className="review__date" dateTime="Дата отзыва">{review?.user}</time>
      </footer>
    </blockquote>
    <div className="review__rating">{review?.rating}</div>
  </div>
);

interface IFilmCardReviewsColumnProps {
  reviews: TReview[];
}
const FilmCardReviewsColumn: FC<IFilmCardReviewsColumnProps> = ({ reviews }) => (
  <div className="film-card__reviews-col">
    {reviews.map((review, index) => (
      <Review key={index} review={review} />
      ))}
      </div>
    );
    
    export const Reviews: FC = () => {
      const params = useParams();
      const films = useAppSelector(selectFilmsData);
      const film = films?.find((f) => f.id === params.id);
      const filmsError = useAppSelector(selectFilmsError);
      const filmsStatus = useAppSelector(selectFilmsStatus);
    
      const firstColumnReviews = useMemo(() => {
        if (film) {
          // TODO next task
    
          // const halfIndex = Math.ceil(film?.reviews.length / 2);
          // return film?.reviews.slice(0, halfIndex);
        }
        return [];
      }, [film]);
    
      const secondColumnReviews = useMemo(() => {
        if (film) {
          // TODO next task
    
          // const halfIndex = Math.ceil(film?.reviews.length / 2);
          // return film?.reviews.slice(halfIndex);
        }
        return [];
      }, [film]);
    
      if (filmsError) {
        return <NotFoundPage/>;
      }
    
      if (!films || filmsStatus === 'LOADING') {
        return <Spinner/>;
      }
    
      return (
        film
          ? (
            <div className="film-card__reviews film-card__row">
              <FilmCardReviewsColumn reviews={firstColumnReviews} />
              <FilmCardReviewsColumn reviews={secondColumnReviews} />
            </div>
          )
          : <NotFoundPage />
      );
    };