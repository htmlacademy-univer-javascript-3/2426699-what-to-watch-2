import React from 'react';

interface ShowMoreButtonProps {
  totalFilms: number;
  visibleFilms: number;
  onLoadMore: () => void;
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ totalFilms, visibleFilms, onLoadMore }) => {
  const showMoreVisible = visibleFilms < totalFilms;

  return (
    <div className="show-more-button">
      {showMoreVisible && (
        <button className="catalog__button" type="button" onClick={onLoadMore}>
        Show more
      </button>
      )}
    </div>
  );
};

export default ShowMoreButton;
