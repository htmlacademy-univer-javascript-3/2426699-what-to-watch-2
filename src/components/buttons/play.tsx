import { Link } from 'react-router-dom';
import { FC, memo } from 'react';

interface PlayerProps {
  filmId: string;
}

const arePropsEqual = (prevProps: PlayerProps, nextProps: PlayerProps) => {
  return prevProps.filmId === nextProps.filmId;
};

export const Play: FC<PlayerProps> = memo(({ filmId }) => {
  return (
    <Link to={`/player/${filmId}`} className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19">
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </Link>
  );
}, arePropsEqual);
