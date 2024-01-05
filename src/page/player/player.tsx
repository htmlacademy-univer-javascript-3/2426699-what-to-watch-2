import { FC, useRef, useState, useMemo } from 'react';
import NotFoundPage from '../not-found/not-found.tsx';
import { useAppSelector } from '../../hooks/stores.ts';
import { selectFilmsData, selectFilmsError, selectFilmsStatus, selectFilmData } from '../../store/films/film-selectors.ts';
import Spinner from '../../components/spinner/spinner.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/stores.ts';
import { fetchFilm } from '../../store/api-actions/api-actions.ts';
import { useEffect } from 'react';

export const Player: FC = () => {
  const { id = '' } = useParams();

  const films = useAppSelector(selectFilmsData);
  const filmsError = useAppSelector(selectFilmsError);
  const filmsStatus = useAppSelector(selectFilmsStatus);
  const film = useAppSelector(selectFilmData);

  if (filmsError || !film) {
    return <NotFoundPage />;
  }

  if (!films || filmsStatus === 'LOADING') {
    return <Spinner />;
  }

  const navigate = useNavigate();
  const exitPlayer = useCallback(() => id && navigate(`/films/${film.id}`), [id, navigate]);

  const dispatch = useAppDispatch();

  if (id && id !== film?.id) {
    dispatch(fetchFilm(id));
  }

  const videoRef = useRef<HTMLVideoElement>(null);
  const togglerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLProgressElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({ current: 0, duration: 0 });

  const progress = useMemo(() => (time.current / time.duration) * 100, [time]);
  const [togglerPosition, setTogglerPosition] = useState(0);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    document.removeEventListener('mouseup', handleMouseUp);
  }, []);

  const handleTogglerMouseDown = useCallback(() => {
    setIsDragging(true);
    if (videoRef.current) {
      videoRef.current.currentTime = (togglerPosition / 100) * videoRef.current.duration;
    }
    document.addEventListener('mouseup', handleMouseUp);
  }, [handleMouseUp, togglerPosition]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging && progressRef.current && togglerRef.current && videoRef.current) {
      const videoWidth = progressRef.current.clientWidth;
      const mouseX = e.clientX - progressRef.current.getBoundingClientRect().left;
      const newTime = (mouseX / videoWidth) * videoRef.current.duration;
      const newTogglerPosition = (newTime / videoRef.current.duration) * 100;
      setTogglerPosition(newTogglerPosition);
      togglerRef.current.style.left = `${newTogglerPosition}%`;
    }
  }, [isDragging]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp, isDragging]);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    const videoElement = videoRef.current;

    const handleLoadedMetadata = () => {
      setTime((prevTime) => ({ ...prevTime, duration: videoElement.duration }));
    };

    const handleTimeUpdate = () => {
      setTime((prevTime) => ({ ...prevTime, current: videoElement.currentTime }));
    };

    videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
    videoElement.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const toggleFullScreen = useCallback(() => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  }, []);

  const SECONDS_IN_HOUR = 3600;
  const SECONDS_IN_MINUTE = 60;

  const formatTime = useMemo(() => (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / SECONDS_IN_HOUR);
    const minutes = Math.floor((timeInSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
    const seconds = Math.floor(timeInSeconds % SECONDS_IN_MINUTE);

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }, []);

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={film.videoLink}
        className="player__video"
        poster={film.backgroundImage}
        data-testid="video-player"
      />

      <button type="button" className="player__exit" onClick={exitPlayer}>
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={togglerPosition > progress ? togglerPosition.toString() : progress.toString()}
              max="100"
              ref={progressRef}
            />
            <div
              className="player__toggler"
              style={{
                left: `${togglerPosition > progress ? togglerPosition : progress
                }%`,
              }}
              ref={togglerRef}
              onMouseDown={handleTogglerMouseDown}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">{formatTime(time.current)}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            data-testid="play-button"
            className="player__play"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#pause"></use>
              </svg>
            ) : (
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
            )}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={toggleFullScreen}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};
