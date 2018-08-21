import React from 'react';

import { Div } from './app/app.style';
import { TasksIntro } from './tasksIntro/tasksIntro.component';
import { TasksForm } from './tasksForm';

export const TasksPage = () => (
  <Div pt6>
    <TasksIntro />
    <TasksForm />>
  </Div>
);
