import React from 'react';

import { Div } from '../app/app.style';
import { TasksList } from '../tasksList';

export const ViewTasksPage = () => (
  <Div pt6>
    These are your current tasks:
    <TasksList />
    {/* TODO CAROLINE: Left off here: do a fetch tasks from BE and display here. */}
  </Div>
);
