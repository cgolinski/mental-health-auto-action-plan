import { ACTION_TYPES } from './actionTypes';

export const toggleShout = () => ({
  type: ACTION_TYPES.TOGGLE_SHOUT,
});

export const getTasks = tasks => ({
  type: ACTION_TYPES.GET_TASKS,
  payload: tasks,
});

export const submitTasks = tasks => ({
  type: ACTION_TYPES.SUBMIT_TASKS,
  payload: tasks,
});

export const postTasks = tasks => ({
  type: ACTION_TYPES.POST_TASKS,
  payload: tasks,
});
