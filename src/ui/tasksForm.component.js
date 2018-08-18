import React from 'react';
import { Form } from 'react-redux-form';

import { Task } from './task.component.js';

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
      <Form model="tasks" onSubmit={tasks => this.handleSubmit(tasks)}>
        {Array.from({ length: this.state.numberOfTaskRows }, (num, i) => (
          <Task taskNumber={i} key={i} />
        ))}
        <button onClick={this.addTaskRow}>Add another task</button>
        <div style={{ paddingTop: '20px' }}>
          <button type="submit">Finish registration!</button>
        </div>
      </Form>
    );
  }
}

export default TasksForm;
