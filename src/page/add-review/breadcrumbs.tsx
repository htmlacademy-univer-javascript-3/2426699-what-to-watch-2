import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { TFilm } from '../../types/film';

interface BreadcrumbsProps {
  film?: TFilm;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ film }) => {

  const linkComponents = useMemo(() => (
    <>
      <li className="breadcrumbs__item">
        <Link to={`/films/${film?.id || ''}`} className="breadcrumbs__link">
          {film?.name}
        </Link>
      </li>
      <li className="breadcrumbs__item">
        <a className="breadcrumbs__link">
          Add review
        </a>
      </li>
    </>
  ), [film]);

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        {linkComponents}
      </ul>
    </nav>
  );
};
