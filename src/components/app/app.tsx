
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../main-page/main-page';
import SignIn from '../sing-in/sing-in';
import PrivateRoute from '../private-route/private-route';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import Player from '../player/player';
import NotFoundPage from '../not-found/not-found';
import { Film } from '../../mocks/films';
import { MainFilm } from '../../mocks/mainFilm';
import { FC } from 'react';


interface AppProps {
  films: Film[]; // Для MyList
  film: Film; // Для Player
  mainFilm: MainFilm[];
}

const App: FC<AppProps> = (props) => {
  const { films, film, mainFilm } = props;


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage // Ссылка Link в film-card.tsx
              films={films}
              mainFilm={mainFilm}
            />
          }
        />
        <Route path="/login" element={<SignIn />} />
        <Route path="/mylist" element={<PrivateRoute component={<MyList films={films}/>} />} /> 
        <Route path="/films/:id" element={<MoviePage />} />
        <Route path="/films/:id/review" element={<MoviePageReviews />} />
        <Route path="/player/:id" element={<Player film={film}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
