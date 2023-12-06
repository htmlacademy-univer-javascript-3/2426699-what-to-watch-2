import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { MoviePage } from '../../page/movie-page/movie-page.tsx';
import { FC, useEffect } from 'react';
import { Main } from '../../page/main-page/main-page.tsx';
import NotFoundPage from '../../page/not-found/not-found.tsx';
import SignIn from '../../page/sing-in/sing-in.tsx';

import { AddReview } from '../buttons/add-review.tsx';
import { Player } from '../../page/player/player.tsx';
import { PrivateRoute } from '../private-route/private-route.tsx';
import { MyList } from '../../page/my-list/my-list.tsx';
import { useAppDispatch } from '../../hooks/stores.ts';
import { fetchMovies, getAuthorizationStatus } from '../../store/api-actions/api-actions.ts';


export const AppRouter: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAuthorizationStatus());
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<SignIn />}/>

        <Route path="/mylist" element={
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        }
        />

        <Route path="/films/:id" element={<MoviePage />}/>
        <Route path="/films/:id/review" element={<AddReview />}/>

        <Route path="/player/:id" element={<Player />}/>

        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
};
