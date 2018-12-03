export const getTasks = () => {
  // fetch tasks from backend
  fetch('/tasks')
    .then(data => data.json())
    .then(data => console.log(data));
};

export const postTask = body => {};
