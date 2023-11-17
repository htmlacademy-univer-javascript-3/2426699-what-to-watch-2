import { Film } from '../../mocks/films';
import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import VideoPlayer from '../video-player/video-player';


const PLAYER_TIMEOUT = 1000;

interface FilmCardProps {
  films: Film;
}

const FilmCard: React.FC<FilmCardProps> = (props) => {
  const {films} = props;

  const [isPlaying, setIsPlaying] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const handleMouseEnter = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      setIsPlaying(true);
    }, PLAYER_TIMEOUT);
  };

  const handleMouseLeave = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    setIsPlaying(false);
  };

  return (
    <>
      <article className="small-film-card catalog__films-card"> 
        <div className="small-film-card__image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          <VideoPlayer isPlaying={isPlaying} videoUrl={films.video} previewImageUrl={films.poster}/>
        </div>
        <h3 className="small-film-card__title">
          <Link to={`/films/${films.id}`} className="small-film-card__link"> 
            {films.title}
          </Link>
        </h3>
      </article>
    </>
  );
};

export default FilmCard;
