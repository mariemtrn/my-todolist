import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState } from '@store/types.store';
import rootReducer from '@store/reducers.store';
import persistMiddleware from '@store/middleware/persist.middleware';

const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) as RootState;
  } catch (err) {
    return undefined;
  }
};

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(persistMiddleware))
);

export default store;
