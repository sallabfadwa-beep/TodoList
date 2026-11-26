import { legacy_createStore } from 'redux';
import counterReducer from './reducers/counterReducer';

export const store = legacy_createStore(counterReducer);