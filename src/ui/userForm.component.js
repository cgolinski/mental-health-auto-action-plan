import React from 'react';
import { Control, Form, actions } from 'react-redux-form';

class UserForm extends React.Component {
  handleSubmit(user) {
    // Do whatever you like in here.
    // If you connect the UserForm to the Redux store,
    // you can dispatch actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
  }
  render() {
    return (
      <Form model="user" onSubmit={user => this.handleSubmit(user)}>
        <label htmlFor="user.firstName">First name:</label>
        <Control.text model="user.firstName" id="user.firstName" />

        <label htmlFor="user.lastName">Last name:</label>
        <Control.text model="user.lastName" id="user.lastName" />

        <label htmlFor="user.email">Email:</label>
        <Control.text model="user.email" id="user.email" />

        <label htmlFor="user.mobilePhone">Mobile phone:</label>
        <Control.text model="user.mobilePhone" id="user.mobilePhone" />

        <button type="submit">Finish registration!</button>
      </Form>
    );
  }
}

export default UserForm;
