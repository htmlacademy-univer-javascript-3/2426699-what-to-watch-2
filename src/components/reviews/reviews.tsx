import { FC, useMemo } from 'react';
import { TReview } from '../../types/review.ts';
import NotFoundPage from '../../page/not-found/not-found.tsx';
import { useAppSelector } from '../../hooks/stores.ts';
import { selectReviewsData, selectReviewsError, selectReviewsStatus } from '../../store/films/film-selectors.ts';
import Spinner from '../spinner/spinner.tsx';
//TODO!!!

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
    {reviews.map((review) => (
      <Review key={review?.id} review={review} />
    ))}
  </div>
);


export const Reviews: FC = () => {
  const reviews = useAppSelector(selectReviewsData);
  const reviewsStatus = useAppSelector(selectReviewsStatus);
  const reviewsError = useAppSelector(selectReviewsError);


  const firstColumnReviews = useMemo(() => {
    if (reviews) {
      const halfIndex = Math.ceil(reviews?.length / 2);
      return reviews?.slice(0, halfIndex);
    }
    return [];
  }, [reviews]);

  const secondColumnReviews = useMemo(() => {
    if (reviews) {
      const halfIndex = Math.ceil(reviews?.length / 2);
      return reviews?.slice(halfIndex);
    }
    return [];
  }, [reviews]);

  if (reviewsError) {
    return <NotFoundPage/>;
  }

  if (!reviews || reviewsStatus === 'LOADING') {
    return <Spinner/>;
  }

  return reviews.length ? (
   
        <div className="film-card__reviews film-card__row">
          <FilmCardReviewsColumn reviews={secondColumnReviews} />
          <FilmCardReviewsColumn reviews={firstColumnReviews} />          
        </div>
      
      
      
  ):(
    <h1 style={{ color: 'black' }}>Кажется к этому фильму нет отзывов</h1>
  );
};