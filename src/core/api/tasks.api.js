export const getTasksService = () =>
  // fetch tasks from backend
  fetch('/tasks').then(data => data.json());

export const postTask = body => {};
