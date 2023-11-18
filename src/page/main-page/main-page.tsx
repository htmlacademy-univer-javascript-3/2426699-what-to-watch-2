import { FC, useCallback, useState } from 'react';
import FilmList from '../../components/film-list/film-list';
import { Film } from '../../mocks/films';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import Footer  from '../../components/footer/footer';
import { ECatalog, eCatalogValues } from '../../types/ECatalog'; 
import GenresItem from '../../components/genres-item/genres-item';


interface MainPageProps {
  films: Film[];
  mainFilm: Film;
}
const MainPage: FC<MainPageProps> = (props) => {
  const { films, mainFilm } = props;
  const [selectedGenre, setSelectedGenre] = useState(ECatalog.All);
  const navigate = useNavigate();

  const playClick = useCallback(() => {
    navigate(`/player/${mainFilm?.id}`);
  }, [mainFilm?.id]) 

  const myListClick = useCallback(() => {
    navigate(`/mylist/`);
  }, [])
  const handleGenreChange = useCallback((newGenre: ECatalog) => {
    setSelectedGenre(newGenre);
    // Здесь можно добавить логику фильтрации фильмов по выбранному жанру
    // Обновите логику в соответствии с вашей реальной реализацией
  }, []);

  return (
    <>
      <div className="visually-hidden">
      </div>

      <section className="film-card">
        <div className="film-card__bg">
          <img src={mainFilm.poster} alt={mainFilm.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head"> 
          <div className="logo">
            <Logo />
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to={'/login'} className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap"> 
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={mainFilm.poster} alt={mainFilm.title} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{mainFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{mainFilm.genre}</span>
                <span className="film-card__year">{mainFilm.releaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={playClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={myListClick}>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {eCatalogValues.map((genre) => (
              <GenresItem
                key={genre}
                catalog={genre}
                setGenre={handleGenreChange}
                isActive={selectedGenre === genre}
              />
            ))}
          </ul>

          <FilmList films={films} selectedGenre={selectedGenre}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div> 
        </section> 

        <Footer />
        
      </div>
    </>
  );
}

export default MainPage;
