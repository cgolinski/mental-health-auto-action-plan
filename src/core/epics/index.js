import { combineEpics } from 'redux-observable';
import { getTasksEpic, postTasksEpic } from './tasks.epics';

export default combineEpics(getTasksEpic, postTasksEpic);
