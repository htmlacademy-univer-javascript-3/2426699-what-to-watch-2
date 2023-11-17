
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../../page/main-page/main-page';
import SignIn from '../../page/sing-in/sing-in';
import PrivateRoute from '../private-route/private-route';
import MyList from '../../page/my-list/my-list';
import MoviePage from '../../page/movie-page/movie-page';
import Player from '../../page/player/player';
import NotFoundPage from '../../page/not-found/not-found';
import { Film } from '../../mocks/films';
import { FC } from 'react';
import { AddReview } from '../../page/add-review/add-review';


interface AppProps {
  films: Film[];
}

const App: FC<AppProps> = (props) => {
  const { films } = props;


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage // Ссылка Link в film-card.tsx
              films={films}
              mainFilm={films[4]}
            />
          }
        />
        <Route path="/login" element={<SignIn />} />
        <Route path="/mylist" element={<PrivateRoute component={<MyList films={films} />} />} />
        <Route path="/films/:id" element={<MoviePage />} />
        <Route path="/films/:id/review" element={<AddReview />} / //Тоже через PrivateRoute&
        >
        <Route path="/player/:id" element={<Player />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
