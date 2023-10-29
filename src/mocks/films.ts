export interface Film {
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

const films: Film[] = [
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
    },
    {
        id: 2,
        title: 'Fantastic Beasts: The Crimes of Grindelwald',
        genre: 'Fantasy',
        releaseDate: 2018,
        poster: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
        background: 'img/bg-fantastic-beasts.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        director: 'David Yates',
        starring: 'Eddie Redmayne, Katherine Waterston, Johnny Depp, Jude Law, and others',
        video: 'https://example.com/video2.mp4',
    },
    {
        id: 3,
        title: 'Bohemian Rhapsody',
        genre: 'Biography, Drama, Music',
        releaseDate: 2018,
        poster: 'img/bohemian-rhapsody.jpg',
        background: 'img/bg-bohemian-rhapsody.jpg',
        description: 'The story of the legendary rock band Queen and lead singer Freddie Mercury...',
        director: 'Bryan Singer',
        starring: 'Rami Malek, Lucy Boynton, Gwilym Lee, Ben Hardy, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 4,
        title: 'Macbeth',
        genre: 'Drama',
        releaseDate: 2015,
        poster: 'img/macbeth.jpg',
        background: 'img/bg-macbeth.jpg',
        description: 'The story of a Scottish general whose ambitious wife...',
        director: 'Justin Kurzel',
        starring: 'Michael Fassbender, Marion Cotillard, Jack Madigan, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 5,
        title: 'Aviator',
        genre: 'Biography, Drama',
        releaseDate: 2004,
        poster: 'img/aviator.jpg',
        background: 'img/bg-aviator.jpg',
        description: 'A biographical drama about the early years of legendary director and aviator...',
        director: 'Martin Scorsese',
        starring: 'Leonardo DiCaprio, Cate Blanchett, Kate Beckinsale, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 6,
        title: 'We Need to Talk About Kevin',
        genre: 'Drama, Mystery, Thriller',
        releaseDate: 2011,
        poster: 'img/we-need-to-talk-about-kevin.jpg',
        background: 'img/bg-we-need-to-talk-about-kevin.jpg',
        description: 'The mother of a teenage boy who went on a high-school killing spree...',
        director: 'Lynne Ramsay',
        starring: 'Tilda Swinton, John C. Reilly, Ezra Miller, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 7,
        title: 'What We Do in the Shadows',
        genre: 'Comedy, Horror',
        releaseDate: 2014,
        poster: 'img/what-we-do-in-the-shadows.jpg',
        background: 'img/bg-what-we-do-in-the-shadows.jpg',
        description: 'A documentary-style look into the daily lives of four vampires...',
        director: 'Jemaine Clement, Taika Waititi',
        starring: 'Jemaine Clement, Taika Waititi, Jonathan Brugh, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 8,
        title: 'Revenant',
        genre: 'Adventure, Drama, Thriller',
        releaseDate: 2015,
        poster: 'img/revenant.jpg',
        background: 'img/bg-revenant.jpg',
        description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival...',
        director: 'Alejandro González Iñárritu',
        starring: 'Leonardo DiCaprio, Tom Hardy, Domhnall Gleeson, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    }
];

export default films;
