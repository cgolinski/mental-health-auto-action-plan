import React from 'react';

import {
  Fieldset,
  FormItemLabel,
  RRFControlText,
  RRFErrors
} from './form.style';

import { Div, Span } from './app.style';

export const Task = ({ taskNumber }) => (
  <Fieldset ba b--transparent ph0 mh0 mv4>
    <Div mv3>
      <FormItemLabel htmlFor="tasks.summary">
        <Span>Task</Span>
        <Span gray normal pl1>
          (what would you like help with?)
        </Span>
      </FormItemLabel>
      <RRFControlText
        model={`tasks[${taskNumber}].summary`}
        id="tasks.summary"
        validators={{
          required: val => val && val.length
        }}
        errors={{
          required: val => !val || !val.length
        }}
      />
      <RRFErrors
        className="errors"
        model={`tasks[${taskNumber}].summary`}
        show="touched"
        messages={{
          required: 'Required'
        }}
      />
    </Div>
    <Div mv3>
      <FormItemLabel htmlFor="tasks.details">
        <Span>More details</Span>
        <Span gray normal pl1>
          (how? where? when?)
        </Span>
        <Span gray normal f7 pl1>
          (optional)
        </Span>
      </FormItemLabel>
      <RRFControlText
        model={`tasks[${taskNumber}].details`}
        id="tasks.details"
        validators={{}}
        errors={{}}
      />
      <RRFErrors
        className="errors"
        model={`tasks[${taskNumber}].details`}
        show="touched"
        messages={{}}
      />
    </Div>
    <Div mv3>
      <FormItemLabel htmlFor="tasks.contact.firstName">
        Contact's first name
      </FormItemLabel>
      <RRFControlText
        model={`tasks[${taskNumber}].contact.firstName`}
        id="tasks.contact.firstName"
        validators={{
          required: val => val && val.length
        }}
        errors={{
          required: val => !val || !val.length
        }}
      />
      <RRFErrors
        className="errors"
        model={`tasks[${taskNumber}].contact.firstName`}
        show="touched"
        messages={{
          required: 'Required'
        }}
      />
    </Div>
    <Div mv3>
      <FormItemLabel htmlFor="tasks.contact.lastName">
        Contact's last name
      </FormItemLabel>
      <RRFControlText
        model={`tasks[${taskNumber}].contact.lastName`}
        id="tasks.contact.lastName"
        validators={{
          required: val => val && val.length
        }}
        errors={{
          required: val => !val || !val.length
        }}
      />
      <RRFErrors
        className="errors"
        model={`tasks[${taskNumber}].contact.lastName`}
        show="touched"
        messages={{
          required: 'Required'
        }}
      />
    </Div>
    <Div mv3>
      <FormItemLabel htmlFor="tasks.contact.email">
        Contact's email
      </FormItemLabel>
      <RRFControlText
        model={`tasks[${taskNumber}].contact.email`}
        id="tasks.contact.email"
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
      />
      <RRFErrors
        className="errors"
        model={`tasks[${taskNumber}].contact.email`}
        show="touched"
        messages={{
          required: 'Required',
          validEmailFormat: 'Invalid email address'
        }}
      />
    </Div>
    <Div mv3>
      <FormItemLabel htmlFor="tasks.contact.mobilePhone">
        <Span>Contact's mobile phone</Span>
        <Span gray normal f7 pl1>
          (optional)
        </Span>
      </FormItemLabel>
      <RRFControlText
        model={`tasks[${taskNumber}].contact.mobilePhone`}
        id="tasks.contact.mobilePhone"
        validators={{
          validPhoneNumber: val => !val || /^[0-9]{5,12}$/i.test(val)
        }}
        errors={{
          validPhoneNumber: val => val && !/^[0-9]{5,12}$/i.test(val)
        }}
      />
      <RRFErrors
        className="errors"
        model={`tasks[${taskNumber}].contact.mobilePhone`}
        show="touched"
        messages={{
          validPhoneNumber: 'Invalid phone number'
        }}
      />
    </Div>
  </Fieldset>
);
