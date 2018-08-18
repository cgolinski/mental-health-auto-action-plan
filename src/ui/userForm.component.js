import React from 'react';
import {
  Control,
  Errors,
  Form
  // actions
} from 'react-redux-form';

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
        <div>
          <label htmlFor="user.firstName">First name:</label>
          <Control.text
            model="user.firstName"
            id="user.firstName"
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
            model="user.firstName"
            show="touched"
            messages={{
              required: 'Required'
              // minLength: 'Must be 5 or more characters'
            }}
          />
        </div>
        <div>
          <label htmlFor="user.lastName">Last name:</label>
          <Control.text
            model="user.lastName"
            id="user.lastName"
            validators={{
              required: val => val && val.length
              // minLength: val => val.length >= 5
            }}
            errors={{
              required: val => !val || !val.length
            }}
          />{' '}
          <Errors
            className="errors"
            model="user.lastName"
            show="touched"
            messages={{
              required: 'Required'
              // minLength: 'Must be 5 or more characters'
            }}
          />
        </div>
        <div>
          <label htmlFor="user.email">Email:</label>
          <Control.text
            model="user.email"
            id="user.email"
            validators={{
              required: val => val && val.length,
              validEmailFormat: val =>
                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
            }}
            errors={{
              required: val => !val || !val.length,
              validEmailFormat: val =>
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
            }}
          />{' '}
          <Errors
            className="errors"
            model="user.email"
            show="touched"
            messages={{
              required: 'Required',
              validEmailFormat: 'Invalid email address'
            }}
          />
        </div>
        <div>
          <label htmlFor="user.mobilePhone">Mobile phone:</label>
          <Control.text
            model="user.mobilePhone"
            id="user.mobilePhone"
            validators={{
              required: val => val && val.length,
              validPhoneNumber: val => /^[0-9]{5,12}$/i.test(val)
              // CAROLINE TODO: ^ Research how to validate international phone numbers
              // CAROLINE TODO: ^ Research what the i is after the regex string
            }}
            errors={{
              required: val => !val || !val.length,
              validPhoneNumber: val => !/^[0-9]{5,12}$/i.test(val)
            }}
          />{' '}
          <Errors
            className="errors"
            model="user.mobilePhone"
            show="touched"
            messages={{
              required: 'Required',
              validPhoneNumber: 'Invalid phone number'
            }}
          />
        </div>
        <button type="submit">Finish registration!</button>
      </Form>
    );
  }
}

export default UserForm;
