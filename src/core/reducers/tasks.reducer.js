// import { ACTION_TYPES } from '../actions/actionTypes';

const initialTasksState = [
  {
    summary: '',
    details: '',
    frequency: '',
    contact: {
      name: '',
      email: '',
      mobilePhone: null
    }
  }
];

export const tasksReducer = (state = initialTasksState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
