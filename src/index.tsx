import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@src/App';
import '@src/index.css';
import store from '@store/init.store';
import { Provider } from 'react-redux';
import TrashPage from '@pages/TrashPage/TrashPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/trash" element={<TrashPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
