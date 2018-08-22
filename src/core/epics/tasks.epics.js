import { ACTION_TYPES } from '../actions/actionTypes';
import { postTasks } from '../actions';

export const postTasksEpic = postTasksService => (action$, store) =>
  action$.ofType(ACTION_TYPES.SUBMIT_TASKS).mergeMap(
    () =>
      postTasksService(getToken(store.getState())).then(tasks =>
        postTasks(tasks)
      )
    // .catch(err => err)
  );
