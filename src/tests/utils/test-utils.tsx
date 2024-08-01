import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

export const renderWithProviders = (
  ui: React.ReactElement,
  { initialState = {}, store = mockStore(initialState), route = '/' }: { initialState?: object; store?: any; route?: string } = {}
) => {
  window.history.pushState({}, 'Test page', route);

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        {ui}
      </MemoryRouter>
    </Provider>
  );
};
