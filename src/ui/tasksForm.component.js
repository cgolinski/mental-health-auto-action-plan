import React from 'react';
import { Form } from 'react-redux-form';

import { Task } from './task.component.js';
import { AddRowButton } from './tasksForm.style';
import { Legend, RRFForm, SubmitButton } from './form.style';

class TasksForm extends React.Component {
  state = {
    numberOfTaskRows: 3
  };

  addTaskRow = () => {
    this.setState({ numberOfTaskRows: this.state.numberOfTaskRows + 1 });
  };

  handleSubmit(tasks) {
    console.log('You clicked submit!');
    // Do whatever you like in here.
    // If you connect the UserForm to the Redux store,
    // you can dispatch actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
  }

  render() {
    return (
      <RRFForm model="tasks" onSubmit={tasks => this.handleSubmit(tasks)}>
        <Legend>Tasks Form</Legend>
        {Array.from({ length: this.state.numberOfTaskRows }, (num, i) => (
          <Task taskNumber={i} key={i} />
        ))}
        <AddRowButton onClick={this.addTaskRow}>
          + Add another task
        </AddRowButton>
        <div style={{ paddingTop: '20px' }}>
          <SubmitButton type="submit">Submit Tasks!</SubmitButton>
        </div>
      </RRFForm>
    );
  }
}

export default TasksForm;
