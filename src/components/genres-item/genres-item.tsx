import React from 'react';
import { ECatalog } from '../../types/ECatalog.ts';

interface IGenresItemProps {
  genre: any;
  setGenre: (newGenre: ECatalog) => () => void;
  isActive: boolean;
}
export const GenresItem: React.FC<IGenresItemProps> = ({
  genre, setGenre, isActive
}) => (
  <li
    className={`catalog__genres-item ${isActive ? 'catalog__genres-item--active' : ''}`}
    key={genre}
  >
    <div
      onClick={setGenre(genre)}
      className="catalog__genres-link"
    >
      {genre}
    </div>
  </li>
);
