import React from 'react';
import { Link } from 'react-router-dom';
import { TFilm } from '../../types/film';

interface BreadcrumbsProps {
  currentFilm?: TFilm;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentFilm }) => (
  <nav className="breadcrumbs">
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__item">
        <Link to={`/films/${currentFilm?.id}`} className="breadcrumbs__link">
          {currentFilm?.title}
        </Link>
      </li>
      <li className="breadcrumbs__item">
        <a className="breadcrumbs__link">
          Add review
        </a>
      </li>
    </ul>
  </nav>
);
