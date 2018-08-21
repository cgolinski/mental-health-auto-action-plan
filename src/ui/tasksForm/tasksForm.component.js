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
  removeLastTaskRow = () => {
    this.setState({ numberOfTaskRows: this.state.numberOfTaskRows - 1 });
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
        <Div flex flex-column items-start>
          <AddRowButton onClick={this.addTaskRow} shadow-hover>
            + Add another task
          </AddRowButton>
          <AddRowButton onClick={this.removeLastTaskRow} shadow-hover>
            - Remove last task
          </AddRowButton>
        </Div>
        <Div pt4>
          <SubmitButton type="submit" shadow-hover>
            Submit Tasks!
          </SubmitButton>
        </Div>
      </RRFForm>
    );
  }
}
