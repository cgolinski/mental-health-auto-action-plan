import { ACTION_TYPES } from '../actions/actionTypes';
import { postTasks } from '../actions';
import { getTasksService, postTasksService } from '../../core/api/tasks.api.js';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

export const getTasksEpic = action$ =>
  action$.pipe(
    ofType(ACTION_TYPES.GET_TASKS),
    mergeMap(action => getTasksService().then(tasks => tasks)),
    map(tasks => ({
      type: ACTION_TYPES.SET_TASKS,
      payload: tasks,
    }))
  );

export const postTasksEpic = (action$, store) =>
  action$.pipe(
    ofType(ACTION_TYPES.SUBMIT_TASKS),
    mergeMap(({ payload }) =>
      postTasksService(payload)
        .then(tasks => postTasks(tasks))
        .catch(err => console.log('There was an error:', err))
    )
  );
