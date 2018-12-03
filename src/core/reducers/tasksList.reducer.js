import { ACTION_TYPES } from '../actions/actionTypes';

const initialTasksState = [];

export const tasksListReducer = (state = initialTasksState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_TASKS:
      return [...action.payload];
    default:
      return state;
  }
};
