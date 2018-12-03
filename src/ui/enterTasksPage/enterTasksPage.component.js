import React from 'react';

import { Div } from '../app/app.style';
import { TasksIntro } from '../tasksIntro';
import { TasksForm } from '../tasksForm';

export const EnterTasksPage = () => (
  <Div pt6>
    <TasksIntro />
    <TasksForm />
  </Div>
);
