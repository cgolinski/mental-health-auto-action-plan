import { TasksFormComponent } from './tasksForm.component';
import { tasksFormConnector } from './tasksForm.selector';

export const TasksForm = tasksFormConnector(TasksFormComponent);
