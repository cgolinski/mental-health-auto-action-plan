import React from 'react';
import {
  Control,
  Form,
  // actions,
  Errors
} from 'react-redux-form';
import { createSelector, createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const renderSample = j => (
  <div key={j}>
    <div>
      <label htmlFor="mySample.firstName">First name:</label>
      <Control.text
        model={`mySample[${j}].firstName`}
        id="mySample.firstName"
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
        model={`mySample[${j}].firstName`}
        show="touched"
        messages={{
          required: 'Required'
          // minLength: 'Must be 5 or more characters'
        }}
      />
    </div>
    <div>
      <label htmlFor="mySample.lastName">Last name:</label>
      <Control.text
        model={`mySample[${j}].lastName`}
        id="mySample.lastName"
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
        model={`mySample[${j}].lastName`}
        show="touched"
        messages={{
          required: 'Required'
          // minLength: 'Must be 5 or more characters'
        }}
      />
    </div>
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
