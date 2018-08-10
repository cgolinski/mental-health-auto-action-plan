import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { shoutReducer } from './shout.reducer.js';

export default combineReducers({
  routing: routerReducer,
  shout: shoutReducer
});
