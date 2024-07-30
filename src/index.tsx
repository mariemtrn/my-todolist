import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@src/App';
import '@src/index.css';
import store from '@store/init.store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
