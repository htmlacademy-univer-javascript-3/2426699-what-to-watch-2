
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../main-page/main-page';
import SignIn from '../sing-in/sing-in';
import PrivateRoute from '../private-route/private-route';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import Player from '../player/player';
import NotFoundPage from '../not-found/not-found';
import { Film } from '../../mocks/films';
import { MainFilm } from '../../mocks/mainFilm';
import { FC } from 'react';
import AddReview from '../add-review/add-review';


interface AppProps {
  films: Film[];
  film: Film;
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
        <Route path="/films/:id/review" element={<AddReview  films={film}/>} />
        <Route path="/player/:id" element={<Player films={film}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
