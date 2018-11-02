import { ACTION_TYPES } from '../actions/actionTypes';
import { postTasks } from '../actions';
import { switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

// export const postTasksEpic = (action$, store = {}) =>
//   action$.ofType(ACTION_TYPES.SUBMIT_TASKS).do(
//     console.log('payload in tasks epic', action.payload)

//     // .catch(err => err)
//   );

export const getTasksEpic(action$, store) => {}

export const postTasksEpic = (action$, store) =>
  action$.pipe(
    ofType(ACTION_TYPES.SUBMIT_TASKS),
    switchMap(
      ({ payload }) => {
        console.log('payload in tasks epic', payload);
        return postTasks(payload);
      }

      // .catch(err => err)
    )
  );

// export const postTasksEpic = postTasksService => (action$, store) =>
//   action$.ofType(ACTION_TYPES.SUBMIT_TASKS).mergeMap(
//     () =>
//       postTasksService(getToken(store.getState())).then(tasks =>
//         postTasks(tasks)
//       )
//     // .catch(err => err)
//   );
