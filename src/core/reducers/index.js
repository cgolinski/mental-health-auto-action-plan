import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  combineForms,
  createForms // optional
} from 'react-redux-form';

import { shoutReducer } from './shout.reducer.js';

// CAROLINE TODO: extract MySample code to its own reducer file
const initialMySampleState = [
  {
    firstName: '',
    lastName: ''
  }
];

const initialUserState = {
  firstName: '',
  lastName: '',
  email: '',
  mobilePhone: null
};

const initialTasksState = [
  {
    summary: '',
    details: '',
    frequency: '',
    contact: {
      firstName: '',
      lastName: '',
      email: '',
      mobilePhone: null
    }
  }
];

export default combineReducers({
  routing: routerReducer,
  shout: shoutReducer,
  ...createForms({
    mySample: initialMySampleState,
    user: initialUserState,
    tasks: initialTasksState
  })
});
