import { useRef, FC, useMemo } from 'react';

interface IVideoPlayerProps {
  videoUrl: string;
  previewImageUrl: string;
  isPlaying: boolean;
}

const VideoPlayer: FC<IVideoPlayerProps> = ({ videoUrl, previewImageUrl, isPlaying }) => {
  const videoRef = useRef(null);

  const videoPlayerJSX = useMemo(() => (
    isPlaying ? (
      <video ref={videoRef} src={videoUrl} autoPlay loop muted width="280" height="175" />
    ) : (
      <img src={previewImageUrl} alt="Preview" width="280" height="175" />
    )
  ), [isPlaying, videoUrl, previewImageUrl]);

  return (
    <div>
      {videoPlayerJSX}
    </div>
  );
};

export default VideoPlayer;
