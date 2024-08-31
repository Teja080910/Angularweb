import Cookies from 'js-cookie';
import { combineReducers, createStore } from 'redux';
import { counterReducer } from './slice'; // Adjust path as needed

const loadState = () => {
  try {
    const serializedState = Cookies.get('reduxState');
    if (serializedState) {
      return JSON.parse(serializedState);
    }
    return undefined;
  } catch (err) {
    console.error('Could not load state', err);
    return undefined;
  }
};

const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    Cookies.set('reduxState', serializedState, { expires: 7 });
  } catch (err) {
    console.error('Could not save state', err);
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add other reducers if needed
});

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState
);

store.subscribe(() => {
  saveState(store.getState());
});
