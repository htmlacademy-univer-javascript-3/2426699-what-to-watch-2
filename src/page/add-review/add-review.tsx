import React, { useLayoutEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserBlock } from '../../components/user-block/user-block';
import { Poster } from '../../components/poster/poster';
import { AddReviewForm } from '../../components/add-review-form/add-review-form';
import { useAppDispatch, useAppSelector } from '../../hooks/stores';
import Spinner from '../../components/spinner/spinner';
import { fetchFilm } from '../../store/api-actions/api-actions';
import NotFoundPage from '../not-found/not-found';
import { selectFilmData, selectFilmStatus } from '../../store/films/film-selectors';

const AddReviewPage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const film = useAppSelector(selectFilmData);
  const filmStatus = useAppSelector(selectFilmStatus);

  useLayoutEffect(() => {
    let isMounted = true;

    if (isMounted && id) {
      dispatch(fetchFilm(id));
    }

    return () => {
      isMounted = false;
    };
  }, [id, dispatch]);

  const spinnerComponent = useMemo(() => <Spinner />, []);
  const notFoundPageComponent = useMemo(() => <NotFoundPage />, []);

  if (!film || filmStatus === 'LOADING') {
    return spinnerComponent;
  }

  if (!id) {
    return notFoundPageComponent;
  }

  return film ? (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>
        <UserBlock>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">
                  {film.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="" className="breadcrumbs__link">
                  Add review
                </Link>
              </li>
            </ul>
          </nav>
        </UserBlock>

        <Poster
          src={film.posterImage}
          alt={film.name}
          className="film-card__poster--small"
        />
      </div>
      <AddReviewForm filmId={film.id} />
    </section>
  ) : (
    notFoundPageComponent
  );
};

export const AddReview = React.memo(AddReviewPage);
