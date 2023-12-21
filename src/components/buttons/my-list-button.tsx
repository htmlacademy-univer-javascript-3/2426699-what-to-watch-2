import React, { FormEvent } from 'react';
import { useAppSelector } from '../../hooks/stores';
import { userStatusData } from '../../store/auth/auth-selectors';
import { countFavoriteFilm } from '../../store/main-reducer/main-selectors';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/stores';
import { setFavorite } from '../../store/api-actions/api-actions';

interface IMyListButtonProps {
  filmId: string;
  isFavorite?: boolean;
}
export const MyListButton: React.FC<IMyListButtonProps> = ({ filmId, isFavorite }) => {
  const count = useAppSelector(countFavoriteFilm);
  const user = useAppSelector(userStatusData);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSetFavorite = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (user) {
      dispatch(setFavorite({ status: !isFavorite, filmId: filmId.toString() }));
    }
    else { navigate("/login"); }
  };
  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleSetFavorite}>

      {isFavorite ? (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      ) : (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      )}
      <span>My list</span>
      <span className="film-card__count">{count}</span>
    </button>

  );
};
