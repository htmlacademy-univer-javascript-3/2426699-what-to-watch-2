import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

interface MainPageData {
  title: string;
  genre: string;
  releaseDate: string;
}

const mainPageData: MainPageData = {
  title: "The Grand Budapest Hotel",
  genre: "Drama",
  releaseDate: "2014",
};

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <React.StrictMode>
    <App mainPageData={mainPageData} />
  </React.StrictMode>,
  rootElement
);
