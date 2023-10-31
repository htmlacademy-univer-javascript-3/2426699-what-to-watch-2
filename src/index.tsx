import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';
import mainFilm from './mocks/mainFilm';

// TODO Вернуть Карточку старую

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <React.StrictMode>
    <App films={films} mainFilm={mainFilm}/>
  </React.StrictMode>,
  rootElement
);
