import { ACTION_TYPES } from './actionTypes';

export const getTasks = () => ({
  type: ACTION_TYPES.GET_TASKS,
});

export const setTasks = tasks => ({
  type: ACTION_TYPES.SET_TASKS,
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
