import { FC } from 'react';
import FilmCard from '../../components/film-card/film-card';
import { Film } from '../../mocks/films';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';


interface MyListProps {
    films: Film[];
}

const MyList: FC<MyListProps> = (props) => {
    const { films } = props;
    return (
        <div className="user-page">
            <header className="page-header user-page__head">
                <Logo />

                <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
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

            <section className="catalog">
                <h2 className="catalog__title visually-hidden">Catalog</h2>
                <div className="catalog__films-list">
                    {films.map((film) => (
                        <FilmCard key={film.id} films={film} />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default MyList;
