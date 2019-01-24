## TO DO

- Merge fetch tasks branch into master, and delete fetch tasks branch.
- Handle POST task success. (Display success message and updated tasks list?)
- Handle POST task error.
- Handle GET tasks error.
- Improve security of form

### DEFECTS

- Adding a task row counts as “touching” the existing tasks and the new task, causing validation to be checked. We do no want validation to be checked when adding a row for a new task.
  - Maybe because component state changes and that triggers a rerender?

### FEATURES

- New users
- Password reset

### TECH DEBT

- Move ui/shared/form/form.util to core folder?

### QUESTIONS

- In `tasksForm.component.js`, should `handleSubmit` be calling an action from react-redux-form instead of our own `props.submitTasks`?
- Is react-redux-form supposed to put form state in the store in mySample AND in forms.mySample?
