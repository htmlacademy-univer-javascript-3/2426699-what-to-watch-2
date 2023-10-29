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

interface AppProps {
  films: Film[];
}

const App: React.FC<AppProps> = (props) => {
  const { films } = props;


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              films={films}
            />
          }
        />
        <Route path="/login" element={<SignIn />} />
        <Route path="/mylist" element={<PrivateRoute component={<MyList />} />} />
        <Route path="/films/:id" element={<MoviePage />} />
        <Route path="/films/:id/review" element={<MoviePageReviews />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
