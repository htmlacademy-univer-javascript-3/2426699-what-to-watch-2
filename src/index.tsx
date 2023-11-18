import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';
import { Provider } from 'react-redux';
import { store } from './store/index';


const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App films={films} />
    </Provider>
  </React.StrictMode>,
  rootElement
);
