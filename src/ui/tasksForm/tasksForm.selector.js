import { connect } from 'react-redux';

import { submitTasks } from '../../core/actions';

export const tasksFormConnector = connect(
  () => ({}),
  { submitTasks }
);
