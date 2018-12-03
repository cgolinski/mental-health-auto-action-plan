import { ACTION_TYPES } from '../actions/actionTypes';

const initialTasksState = [
  {
    taskSummary: '',
    taskDetails: '',
    contact: {
      name: '',
      email: '',
      mobilePhone: null,
    },
  },
];

export const tasksFormReducer = (state = initialTasksState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SUBMIT_TASKS:
      console.log('reducer heard SUBMIT_TASKS action');
      return 1;
    case ACTION_TYPES.POST_TASKS:
      console.log('reducer heard POST_TASKS action');
      return 1;
    default:
      return state;
  }
};
