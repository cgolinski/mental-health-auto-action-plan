import React from 'react';

import { Div } from '../app/app.style';
import { Legend, RRFForm, SubmitButton } from '../shared/form/form.style';
import { Task } from '../task/task.component';

import { RowCountChangeButton } from './tasksForm.style';

export class TasksFormComponent extends React.Component {
  state = {
    numberOfTaskRows: 3,
  };

  addTaskRow = () => {
    this.setState({ numberOfTaskRows: this.state.numberOfTaskRows + 1 });
  };
  removeLastTaskRow = () => {
    this.setState({ numberOfTaskRows: this.state.numberOfTaskRows - 1 });
  };

  handleSubmit(tasks) {
    console.log('You clicked submit!');
    this.props.submitTasks(tasks);
    // ^ CAROLINE: or should we be using an action from react-redux-form?

    // Do whatever you like in here.
    // If you connect the UserForm to the Redux store,
    // you can dispatch actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
  }

  render() {
    return (
      <RRFForm model="tasksForm" onSubmit={tasks => this.handleSubmit(tasks)}>
        <Legend>Tasks Form</Legend>
        {Array.from({ length: this.state.numberOfTaskRows }, (num, i) => (
          <Task taskNumber={i} key={i} />
        ))}
        <Div flex flex-column items-start>
          <RowCountChangeButton mb3 onClick={this.addTaskRow}>
            + Add another task
          </RowCountChangeButton>
          <RowCountChangeButton onClick={this.removeLastTaskRow}>
            - Remove last task
          </RowCountChangeButton>
        </Div>
        <Div pt4>
          <SubmitButton type="submit">Submit Tasks!</SubmitButton>
        </Div>
      </RRFForm>
    );
  }
}
