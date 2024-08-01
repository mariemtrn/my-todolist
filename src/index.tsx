import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@src/App';
import '@src/index.css';
import store from '@store/init.store';
import { Provider } from 'react-redux';
import TrashPage from '@pages/TrashPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '@languages/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/trash" element={<TrashPage />} />
        </Routes>
      </I18nextProvider>
    </BrowserRouter>
  </Provider>
);
