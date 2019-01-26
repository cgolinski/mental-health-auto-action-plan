export const getTasksService = () => fetch('/tasks').then(data => data.json());

export const postTasksService = body =>
  console.log('postTasksService in FE was called', { body }) ||
  fetch('/tasks', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(
      response =>
        console.log('response in FE postTasksService', response) ||
        response.json()
    )
    .then(
      jsonresponse =>
        console.log('postTasksService FE Success:', jsonresponse) ||
        jsonresponse
    )
    .catch(error => console.error('postTasksService FE Error:', error));
