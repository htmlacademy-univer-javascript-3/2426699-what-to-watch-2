import { Link, useParams } from "react-router-dom";
import films from "../../mocks/films";
import Reviews from "../../components/reviews/reviews";
import Overview from "../../components/overview/overview";
import Details from "../../components/details/details";
import { ReactElement } from 'react';
import Footer from "../../components/footer/footer";
import Logo from "../../components/logo/logo";
import Buttons from "../../components/buttons/buttons";
import { Tabs } from "../../components/tabs/tabs";
import { LikeThis } from "../../components/like-this/like-this";

interface ITab {
  label: string;
  component: ReactElement;
}

const MoviePage = () => {
  const { id } = useParams()
  const currentFilm = films.find((film) => film.id === Number(id))
  const tabs: ITab[] = [
    {
      label: 'Overview',
      component: <Overview />
    },
    {
      label: 'Details',
      component: <Details />
    },
    {
      label: 'Reviews',
      component: <Reviews />
    }
  ];
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm?.poster} alt={currentFilm?.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <Link to="/login" className="user-block__link">Sign out</Link>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm?.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm?.genre}</span>
                <span className="film-card__year">{currentFilm?.releaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <Buttons.Play id={currentFilm?.id} /> 
                <Buttons.MyListButton count={12} />
                <Buttons.AddReview id={currentFilm?.id} />
                </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm?.poster} alt={currentFilm?.title} width="218" height="327" />
            </div>
            
              <Tabs tabs={tabs} />
            
          </div>
        </div>
      </section>

      <div className="page-content">
        <LikeThis />
        <Footer />
      </div>
    </>
  );
};

export default MoviePage;
