export interface MainFilm {
    id: number;
    title: string;
    genre: string;
    releaseDate: number;
    poster: string;
    background: string;
    description: string;
    director: string;
    starring: string;
    video: string;
}

const mainFilm: MainFilm = 
    {
        id: 1,
        title: 'The Grand Budapest Hotel',
        genre: 'Comedy',
        releaseDate: 2014,
        poster: 'img/the-grand-budapest-hotel-poster.jpg',
        background: 'img/bg-the-grand-budapest-hotel.jpg',
        description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort...',
        director: 'Wes Anderson',
        starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    }

export default mainFilm;