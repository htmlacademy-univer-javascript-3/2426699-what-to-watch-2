import { FC } from 'react';
import films from "../../mocks/films";
import AddReviewForm from '../../components/add-review-form/add-review-form';
import { Link, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { LikeThis } from '../../components/like-this/like-this';

const AddReview: FC = () => {

    const { id } = useParams()
    const currentFilm = films.find((film) => film.id === Number(id))
    return (
        <>
            <section className="film-card film-card--full">
                <div className="film-card__header">
                    <div className="film-card__bg">
                        <img src={currentFilm?.poster} alt={currentFilm?.title} />
                    </div>

                    <h1 className="visually-hidden">WTW</h1>

                    <header className="page-header">
                        <Logo />

                        <nav className="breadcrumbs">
                            <ul className="breadcrumbs__list">
                                <li className="breadcrumbs__item">
                                    <Link to="/films/:id" className="breadcrumbs__link">{currentFilm?.title}</Link>
                                </li>
                                <li className="breadcrumbs__item">
                                    <Link to="/films/:id/review" className="breadcrumbs__link">Add review</Link>
                                </li>
                            </ul>
                        </nav>

                        <ul className="user-block">
                            <li className="user-block__item">
                                <div className="user-block__avatar">
                                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                                </div>
                            </li>
                            <li className="user-block__item">
                                <a className="user-block__link">Sign out</a>
                            </li>
                        </ul>
                    </header>

                    <div className="film-card__poster film-card__poster--small">
                        <img src={currentFilm?.poster} alt={currentFilm?.title} width="218" height="327" />
                    </div>
                </div>

                <div className="add-review">
                    <AddReviewForm />
                </div>
            </section>

            <LikeThis genre={currentFilm?.genre}/> //TODO Проверить на работоспособность
        </>
    );
};

export default AddReview;
