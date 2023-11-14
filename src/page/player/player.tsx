import { FC, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import films from '../../mocks/films';



const Player: FC = () => {
  const { id } = useParams();
  const currentFilm = films.find((film) => film.id === Number(id));
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlayerActive, setIsPlayerActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPlayerActive(true);
      if (videoRef.current) {
        videoRef.current.play().catch(() => setIsPlayerActive(false));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlayerActive(false);
    }
  };

  return (
    <>
      {isPlayerActive && (
        <div className="player" onMouseLeave={handleMouseLeave}>
          <video src={currentFilm?.video} className="player__video" poster={currentFilm?.poster} muted ref={videoRef}></video>
          <button type="button" className="player__exit">
            Exit
          </button>
          <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        
          </div>
        </div>
      )}
    </>
  );
};

export default Player;