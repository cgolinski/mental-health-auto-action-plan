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
            <FormItemLabel htmlFor="user.firstName">First name</FormItemLabel>
            <RRFControlText
              model="user.firstName"
              id="user.firstName"
              validators={{
                required: val => val && val.length
              }}
              errors={{
                required: val => !val || !val.length
              }}
            />
            <RRFErrors
              className="errors"
              model="user.firstName"
              show="touched"
              messages={{
                required: 'Required'
              }}
            />
          </Div>
          <Div mv3>
            <FormItemLabel htmlFor="user.lastName">Last name</FormItemLabel>
            <RRFControlText
              model="user.lastName"
              id="user.lastName"
              validators={{
                required: val => val && val.length
              }}
              errors={{
                required: val => !val || !val.length
              }}
            />{' '}
            <RRFErrors
              className="errors"
              model="user.lastName"
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
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
                // consider not doing email validation with regex
                // instead just look for @ and .
                // indexOf('@') > -1 && indexof('.') > -1
              }}
              errors={{
                required: val => !val || !val.length,
                validEmailFormat: val =>
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
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
                required: val => val && val.length,
                validPhoneNumber: val => /^[0-9]{5,12}$/i.test(val)
                // CAROLINE TODO: ^ Research how to validate international phone numbers
              }}
              errors={{
                required: val => !val || !val.length,
                validPhoneNumber: val => !/^[0-9]{5,12}$/i.test(val)
              }}
            />{' '}
            <RRFErrors
              className="errors"
              model="user.mobilePhone"
              show="touched"
              messages={{
                required: 'Required',
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
