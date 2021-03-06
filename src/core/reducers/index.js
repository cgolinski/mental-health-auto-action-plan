import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createForms } from 'react-redux-form';

import { shoutReducer } from './shout.reducer';
import { userReducer } from './user.reducer';
import { tasksReducer } from './tasks.reducer';

export default combineReducers({
  routing: routerReducer,
  shout: shoutReducer,
  ...createForms({
    user: userReducer,
    tasks: tasksReducer
  })
});
