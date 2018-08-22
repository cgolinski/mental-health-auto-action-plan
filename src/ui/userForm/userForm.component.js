import React from 'react';

import { Div } from '../app/app.style';
import {
  Fieldset,
  FormItemLabel,
  Legend,
  RRFControlText,
  RRFErrors,
  RRFForm,
  SubmitButton
} from '../shared/form/form.style';

export class UserForm extends React.Component {
  handleSubmit(user) {
    // Do whatever you like in here.
    // If you connect the UserForm to the Redux store,
    // you can dispatch actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
  }
  render() {
    return (
      <RRFForm pt4 model="user" onSubmit={user => this.handleSubmit(user)}>
        <Legend>User Form</Legend>
        <Fieldset ba b--transparent ph0 mh0 mv4>
          <Div mv3>
            <FormItemLabel htmlFor="user.name">Name</FormItemLabel>
            <RRFControlText
              model="user.name"
              id="user.name"
              validators={{
                required: val => val && val.length
              }}
              errors={{
                required: val => !val || !val.length
              }}
            />
            <RRFErrors
              className="errors"
              model="user.name"
              show="touched"
              messages={{
                required: 'Required'
              }}
            />
          </Div>
          <Div mv3>
            <FormItemLabel htmlFor="user.email">Email</FormItemLabel>
            <RRFControlText
              model="user.email"
              id="user.email"
              validators={{
                required: val => val && val.length,
                validEmailFormat: val =>
                  // /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
                  val.indexOf('@') > 0 && val.indexOf('.') > 2
                // consider not doing email validation with regex
                // instead just look for @ and .
                // indexOf('@') > -1 && indexof('.') > -1
              }}
              errors={{
                required: val => !val || !val.length,
                validEmailFormat: val =>
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
                // !val.indexOf('@') > 0 || !val.indexOf('.') > 2
              }}
            />{' '}
            <RRFErrors
              className="errors"
              model="user.email"
              show="touched"
              messages={{
                required: 'Required',
                validEmailFormat: 'Invalid email address'
              }}
            />
          </Div>
          <Div mv3>
            <FormItemLabel htmlFor="user.mobilePhone">
              Mobile phone
            </FormItemLabel>
            <RRFControlText
              model="user.mobilePhone"
              id="user.mobilePhone"
              validators={{
                validPhoneNumber: val => /^[0-9]{5,12}$/i.test(val)
                // CAROLINE TODO: ^ Research how to validate international phone numbers
              }}
              errors={{
                validPhoneNumber: val => val && !/^[0-9]{5,12}$/i.test(val)
              }}
            />{' '}
            <RRFErrors
              className="errors"
              model="user.mobilePhone"
              show="touched"
              messages={{
                validPhoneNumber: 'Invalid phone number'
              }}
            />
          </Div>
        </Fieldset>

        <SubmitButton type="submit" shadow-hover>
          Sign Up!
        </SubmitButton>
      </RRFForm>
    );
  }
}
