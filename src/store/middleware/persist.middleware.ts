import { Middleware } from 'redux';
import { RootState } from '@store/types.store';

const persistMiddleware: Middleware<unknown, RootState> = store => next => action => {
  const result = next(action);
  const state = store.getState();
  localStorage.setItem('reduxState', JSON.stringify(state));
  return result;
};

export default persistMiddleware;
