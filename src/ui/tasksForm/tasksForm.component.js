import React from 'react';

import { Div } from '../app/app.style';
import { Legend, RRFForm, SubmitButton } from '../shared/form/form.style';
import { Task } from '../task/task.component';

import { AddRowButton } from './tasksForm.style';

export class TasksForm extends React.Component {
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
        <Div pt4>
          <SubmitButton type="submit">Submit Tasks!</SubmitButton>
        </Div>
      </RRFForm>
    );
  }
}
