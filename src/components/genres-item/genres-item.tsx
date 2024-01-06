import React from 'react';

interface IGenresItemProps {
  genre: string;
  onGenreChange: (newGenre: string) => () => void;
  isActive: boolean;
}
export const GenresItem: React.FC<IGenresItemProps> = ({
  genre, onGenreChange, isActive
}) => (
  <li
    className={`catalog__genres-item ${isActive ? 'catalog__genres-item--active' : ''}`}
    key={genre}
  >
    <div
      onClick={onGenreChange(genre)}
      className="catalog__genres-link"
    >
      {genre}
    </div>
  </li>
);
