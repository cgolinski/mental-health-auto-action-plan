import { ACTION_TYPES } from '../actions/actionTypes';
import { postTasks } from '../actions';
import { getTasksService } from '../../core/api/tasks.api.js';
import { mergeMap, map, switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

// export const postTasksEpic = (action$, store = {}) =>
//   action$.ofType(ACTION_TYPES.SUBMIT_TASKS).do(
//     console.log('payload in tasks epic', action.payload)

//     // .catch(err => err)
//   );

export const getTasksEpic = action$ =>
  action$.pipe(
    ofType(ACTION_TYPES.GET_TASKS),
    mergeMap(action => getTasksService().then(tasks => tasks)),
    map(tasks => ({
      type: ACTION_TYPES.SET_TASKS,
      payload: tasks,
    }))

    // action$.ofType(ACTION_TYPES.GET_CATEGORIES)
    //   .mergeMap(action =>
    //     ajax({url: BASE_ENDPOINT, crossDomain: true})
    //       .map(({ response }) => ({
    //         type: ACTION_TYPES.SET_CATEGORIES,
    //         payload: response,
    //       }))
    //       .catch(error => Observable.of({
    //         type: ACTION_TYPES.SET_CATEGORY_INVALIDATE,
    //         payload: error
    //       }))
    //   );
  );

export const postTasksEpic = (action$, store) =>
  action$.pipe(
    ofType(ACTION_TYPES.SUBMIT_TASKS),
    switchMap(
      ({ payload }) => {
        console.log('payload in post tasks epic', payload);
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
