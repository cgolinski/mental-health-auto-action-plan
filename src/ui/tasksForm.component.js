import React from 'react';
import {
  Control,
  Errors,
  Form
  // actions
} from 'react-redux-form';

const Task = ({ taskNumber }) => (
  <div style={{ paddingBottom: '50px' }}>
    <div>
      <label htmlFor="tasks.summary">Enter task:</label>
      <Control.text
        model={`tasks[${taskNumber}].summary`}
        id="tasks.summary"
        validators={{
          required: val => val && val.length
          // minLength: val => val.length >= 5
        }}
        errors={{
          required: val => !val || !val.length
        }}
      />
      <Errors
        className="errors"
        model={`tasks[${taskNumber}].summary`}
        show="touched"
        messages={{
          required: 'Required'
          // minLength: 'Must be 5 or more characters'
        }}
      />
    </div>
    <div>
      <label htmlFor="tasks.details">More details?:</label>
      <Control.text
        model={`tasks[${taskNumber}].details`}
        id="tasks.details"
        validators={{
          required: val => val && val.length
          // minLength: val => val.length >= 5
        }}
        errors={{
          required: val => !val || !val.length
        }}
      />
      <Errors
        className="errors"
        model={`tasks[${taskNumber}].details`}
        show="touched"
        messages={{
          required: 'Required'
          // minLength: 'Must be 5 or more characters'
        }}
      />
    </div>
    <div>
      <label htmlFor="tasks.frequency">Frequency:</label>
      <Control.text
        model={`tasks[${taskNumber}].frequency`}
        id="tasks.frequency"
        validators={{
          required: val => val && val.length
          // minLength: val => val.length >= 5
        }}
        errors={{
          required: val => !val || !val.length
        }}
      />
      <Errors
        className="errors"
        model={`tasks[${taskNumber}].frequency`}
        show="touched"
        messages={{
          required: 'Required'
          // minLength: 'Must be 5 or more characters'
        }}
      />
    </div>
    <div>
      <label htmlFor="tasks.contact.firstName">Contact's first name:</label>
      <Control.text
        model={`tasks[${taskNumber}].contact.firstName`}
        id="tasks.contact.firstName"
        validators={{
          required: val => val && val.length
          // minLength: val => val.length >= 5
        }}
        errors={{
          required: val => !val || !val.length
        }}
      />
      <Errors
        className="errors"
        model={`tasks[${taskNumber}].contact.firstName`}
        show="touched"
        messages={{
          required: 'Required'
          // minLength: 'Must be 5 or more characters'
        }}
      />
    </div>
    <div>
      <label htmlFor="tasks.contact.lastName">Contact's last name:</label>
      <Control.text
        model={`tasks[${taskNumber}].contact.lastName`}
        id="tasks.contact.lastName"
        validators={{
          required: val => val && val.length
          // minLength: val => val.length >= 5
        }}
        errors={{
          required: val => !val || !val.length
        }}
      />
      <Errors
        className="errors"
        model={`tasks[${taskNumber}].contact.lastName`}
        show="touched"
        messages={{
          required: 'Required'
          // minLength: 'Must be 5 or more characters'
        }}
      />
    </div>
    <div>
      <label htmlFor="tasks.contact.email">Contact's email:</label>
      <Control.text
        model={`tasks[${taskNumber}].contact.email`}
        id="tasks.contact.email"
        validators={{
          required: val => val && val.length
          // minLength: val => val.length >= 5
        }}
        errors={{
          required: val => !val || !val.length
        }}
      />
      <Errors
        className="errors"
        model={`tasks[${taskNumber}].contact.email`}
        show="touched"
        messages={{
          required: 'Required'
          // minLength: 'Must be 5 or more characters'
        }}
      />
    </div>
    <div>
      <label htmlFor="tasks.contact.mobilePhone">Contact's mobile phone:</label>
      <Control.text
        model={`tasks[${taskNumber}].contact.mobilePhone`}
        id="tasks.contact.mobilePhone"
        validators={{
          required: val => val && val.length
          // minLength: val => val.length >= 5
        }}
        errors={{
          required: val => !val || !val.length
        }}
      />
      <Errors
        className="errors"
        model={`tasks[${taskNumber}].contact.mobilePhone`}
        show="touched"
        messages={{
          required: 'Required'
          // minLength: 'Must be 5 or more characters'
        }}
      />
    </div>
  </div>
);

class TasksForm extends React.Component {
  state = {
    numberOfTaskRows: 3
  };

  addRow = () => {
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
        <button onClick={this.addRow}>Add another task</button>
        <div style={{ paddingTop: '20px' }}>
          <button type="submit">Finish registration!</button>
        </div>
      </Form>
    );
  }
}

export default TasksForm;
