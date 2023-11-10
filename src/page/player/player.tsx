import { FC, useState, useRef } from 'react';
import films from "../../mocks/films";
import { useParams } from 'react-router-dom';

const Player: FC = () => {
  const { id } = useParams();
  const currentFilm = films.find((film) => film.id === Number(id));

  // Добавлены состояния для управления видеоплеером
  const [isHovered, setIsHovered] = useState(false); // Состояние для отслеживания наведения курсора
  const [isPlaying, setIsPlaying] = useState(false); // Состояние для отслеживания воспроизведения видео
  const videoRef = useRef<HTMLVideoElement | null>(null); // Создана ссылка на элемент <video> для управления видеоплеером

  // Функция для обработки события "наведения курсора"
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  // Функция для обработки события "ухода курсора"
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <>
      <div className="player">
        <div
          className="player__video-container"
          onMouseEnter={handleMouseEnter} // Обработчик события "наведения курсора"
          onMouseLeave={handleMouseLeave} // Обработчик события "ухода курсора"
        >
          <video
            ref={videoRef} // Привязка ссылки к элементу <video>
            src={currentFilm?.video}
            className="player__video"
            poster={currentFilm?.poster}
            muted
          ></video>
        </div>

        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
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
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
              <div className="player__name">{currentFilm?.title}</div>

              <button type="button" className="player__full-screen">
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"></use>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
