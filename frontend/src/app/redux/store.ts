import { combineReducers, createStore } from 'redux';
import { counterReducer } from './slice';

const rootReducer = combineReducers({
  counter: counterReducer
});

export const store = createStore(rootReducer);
