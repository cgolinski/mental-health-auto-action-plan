import React from 'react';
import { Control, Form, actions, track } from 'react-redux-form';

const renderSample = j => (
  <div key={j}>
    <label htmlFor="mySample.firstName">First name:</label>
    <Control.text
      model={track(`mySample[${j}].firstName`)}
      id="mySample.firstName"
    />

    <label htmlFor="mySample.lastName">Last name:</label>
    <Control.text model={`mySample[${j}].lastName`} id="mySample.lastName" />
  </div>
);

class MySampleForm extends React.Component {
  handleSubmit(user) {
    // Do whatever you like in here.
    // If you connect the UserForm to the Redux store,
    // you can dispatch actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
  }
  render() {
    return (
      <Form model="mySample" onSubmit={user => this.handleSubmit(user)}>
        {[1, 2].map((num, i) => renderSample(i))}

        <button type="submit">Finish registration!</button>
      </Form>
    );
  }
}

export default MySampleForm;
