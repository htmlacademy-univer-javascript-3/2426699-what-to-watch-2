import { Link, useParams } from 'react-router-dom';
import { FC } from 'react';
interface PlayerProps {
  filmId: string;
}
export const Play: FC <PlayerProps> = ({filmId}) => {
 // const { id = '' } = useParams();
  return (
    <Link to={`/player/${filmId}`} className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19">
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </Link>
  );
};