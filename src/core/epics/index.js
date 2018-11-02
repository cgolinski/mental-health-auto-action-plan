import { combineEpics } from 'redux-observable';
import { postTasksEpic } from './tasks.epics';

export default combineEpics(postTasksEpic);
