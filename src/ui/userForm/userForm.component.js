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

import {
  isEmpty,
  isInvalidEmailFormat,
  isInvalidPhoneNumberFormat,
  isValidEmailFormat,
  isValidPhoneNumberFormat,
  isValidString
} from '../shared/form/form.util';

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
                required: isValidString
              }}
              errors={{
                required: isEmpty
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
                required: isValidString,
                validEmailFormat: isValidEmailFormat
              }}
              errors={{
                required: isEmpty,
                validEmailFormat: isInvalidEmailFormat
              }}
            />
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
                validPhoneNumber: isValidPhoneNumberFormat
              }}
              errors={{
                validPhoneNumber: isInvalidPhoneNumberFormat
              }}
            />
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
