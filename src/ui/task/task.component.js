import React from 'react';

import { Div, Span } from '../app/app.style';
import {
  Fieldset,
  FormItemLabel,
  RRFControlText,
  RRFErrors
} from '../shared/form/form.style';
import {
  isEmpty,
  isInvalidEmailFormat,
  isInvalidPhoneNumberFormat,
  isValidEmailFormat,
  isValidPhoneNumberFormat,
  isValidString
} from '../shared/form/form.util';

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
          required: isValidString
        }}
        errors={{
          required: isEmpty
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
      <FormItemLabel htmlFor="tasks.contact.name">Contact's name</FormItemLabel>
      <RRFControlText
        model={`tasks[${taskNumber}].contact.name`}
        id="tasks.contact.name"
        validators={{
          required: isValidString
        }}
        errors={{
          required: isEmpty
        }}
      />
      <RRFErrors
        className="errors"
        model={`tasks[${taskNumber}].contact.name`}
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
          validPhoneNumber: isValidPhoneNumberFormat
        }}
        errors={{
          validPhoneNumber: isInvalidPhoneNumberFormat
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
