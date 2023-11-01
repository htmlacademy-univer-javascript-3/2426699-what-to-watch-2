import React from 'react';
import FilmCard from '../film-card/film-card';
import { Film } from '../../mocks/films';

interface FilmListProps {
    films: Film[];
}

const FilmList: React.FC<FilmListProps> = ({ films }) => {
    return (
        <div className="catalog__films-list">
            {films.map((film) => (
                <FilmCard key={film.id} films={film} />
            ))}
        </div>
    );
};

export default FilmList;