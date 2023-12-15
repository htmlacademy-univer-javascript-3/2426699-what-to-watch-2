import React from 'react';
import { Link } from 'react-router-dom';

interface IMyListButtonProps {
	count: number;
}
export const MyListButton: React.FC<IMyListButtonProps> = ({ count }) => (
  <Link to="/login"className="btn btn--list film-card__button" type="button">
    <svg viewBox="0 0 19 20">
      <use xlinkHref="#add" />
    </svg>
    <span>My list</span>
    <span className="film-card__count">{count}</span>
  </Link>

);