import React from 'react';
import { ECatalog } from '../../types/ECatalog';

interface GenresItemProps {
  catalog: ECatalog;
  setGenre: (newGenre: ECatalog) => void;
  isActive: boolean;
}

const GenresItem: React.FC<GenresItemProps> = ({ catalog, setGenre, isActive }) => (
  <li className={`catalog__genres-item ${isActive ? 'catalog__genres-item--active' : ''}`}>
    <div
      onClick={() => setGenre(catalog)}
      className="catalog__genres-link"
    >
      {catalog}
    </div>
  </li>
);

export default GenresItem;
