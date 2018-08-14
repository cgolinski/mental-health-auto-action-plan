import React from 'react';
import { Control, Form, actions } from 'react-redux-form';

const Task = ({ taskNumber }) => (
  <div>
    <label htmlFor="tasks.summary">Enter task:</label>
    <Control.text model={`tasks[${taskNumber}].summary`} id="tasks.summary" />
    <label htmlFor="tasks.details">More details?:</label>
    <Control.text model={`tasks[${taskNumber}].details`} id="tasks.details" />
    <label htmlFor="tasks.frequency">Frequency:</label>
    <Control.text
      model={`tasks[${taskNumber}].frequency`}
      id="tasks.frequency"
    />
    <label htmlFor="tasks.contact.firstName">Contact's first name:</label>
    <Control.text
      model={`tasks[${taskNumber}].contact.firstName`}
      id="tasks.contact.firstName"
    />
    <label htmlFor="tasks.contact.lastName">Contact's last name:</label>
    <Control.text
      model={`tasks[${taskNumber}].contact.lastName`}
      id="tasks.contact.lastName"
    />
    <label htmlFor="tasks.contact.email">Contact's email:</label>
    <Control.text
      model={`tasks[${taskNumber}].contact.email`}
      id="tasks.contact.email"
    />
    <label htmlFor="tasks.contact.mobilePhone">Contact's mobile phone:</label>
    <Control.text
      model={`tasks[${taskNumber}].contact.mobilePhone`}
      id="tasks.contact.mobilePhone"
    />
  </div>
);

class TasksForm extends React.Component {
  state = {
    numberOfTaskRows: 3
  };

  addRow = () => {
    this.setState({ numberOfTaskRows: this.state.numberOfTaskRows + 1 });
  };

  handleSubmit(user) {
    // Do whatever you like in here.
    // If you connect the UserForm to the Redux store,
    // you can dispatch actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
  }

  render() {
    return (
      <Form model="tasks" onSubmit={user => this.handleSubmit(user)}>
        {Array.from({ length: this.state.numberOfTaskRows }, (num, i) => (
          <Task taskNumber={i} key={i} />
        ))}
        <button onClick={this.addRow}>Add another row</button>
        <button type="submit">Finish registration!</button>
      </Form>
    );
  }
}

export default TasksForm;
