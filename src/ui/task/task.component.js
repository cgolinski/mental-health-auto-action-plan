import React from 'react';

import { Div, Span } from '../app/app.style';
import {
  Fieldset,
  FormItemLabel,
  RRFControlText,
  RRFErrors,
} from '../shared/form/form.style';
import {
  isEmpty,
  isInvalidEmailFormat,
  isInvalidPhoneNumberFormat,
  isValidEmailFormat,
  isValidPhoneNumberFormat,
  isValidString,
} from '../shared/form/form.util';

export const Task = ({ taskNumber }) => (
  <Fieldset ba b--transparent ph0 mh0 mv4>
    <Div mv3>
      <FormItemLabel htmlFor="tasksForm.taskSummary">
        <Span>Task</Span>
        <Span gray normal pl1>
          (what would you like help with?)
        </Span>
      </FormItemLabel>
      <RRFControlText
        model={`tasksForm[${taskNumber}].taskSummary`}
        id="tasksForm.taskSummary"
        validators={{
          required: isValidString,
        }}
        errors={{
          required: isEmpty,
        }}
      />
      <RRFErrors
        className="errors"
        model={`tasksForm[${taskNumber}].taskSummary`}
        show="touched"
        messages={{
          required: 'Required',
        }}
      />
    </Div>
    <Div mv3>
      <FormItemLabel htmlFor="tasksForm.taskDetails">
        <Span>More details</Span>
        <Span gray normal pl1>
          (how? where? when?)
        </Span>
        <Span gray normal f7 pl1>
          (optional)
        </Span>
      </FormItemLabel>
      <RRFControlText
        model={`tasksForm[${taskNumber}].taskDetails`}
        id="tasksForm.taskDetails"
        validators={{}}
        errors={{}}
      />
      <RRFErrors
        className="errors"
        model={`tasksForm[${taskNumber}].taskDetails`}
        show="touched"
        messages={{}}
      />
    </Div>
    <Div mv3>
      <FormItemLabel htmlFor="tasksForm.contact.name">
        Contact's name
      </FormItemLabel>
      <RRFControlText
        model={`tasksForm[${taskNumber}].contact.name`}
        id="tasksForm.contact.name"
        validators={{
          required: isValidString,
        }}
        errors={{
          required: isEmpty,
        }}
      />
      <RRFErrors
        className="errors"
        model={`tasksForm[${taskNumber}].contact.name`}
        show="touched"
        messages={{
          required: 'Required',
        }}
      />
    </Div>
    <Div mv3>
      <FormItemLabel htmlFor="tasksForm.contact.email">
        Contact's email
      </FormItemLabel>
      <RRFControlText
        model={`tasksForm[${taskNumber}].contact.email`}
        id="tasksForm.contact.email"
        validators={{
          required: isValidString,
          validEmailFormat: isValidEmailFormat,
        }}
        errors={{
          required: isEmpty,
          validEmailFormat: isInvalidEmailFormat,
        }}
      />
      <RRFErrors
        className="errors"
        model={`tasksForm[${taskNumber}].contact.email`}
        show="touched"
        messages={{
          required: 'Required',
          validEmailFormat: 'Invalid email address',
        }}
      />
    </Div>
    <Div mv3>
      <FormItemLabel htmlFor="tasksForm.contact.mobilePhone">
        <Span>Contact's mobile phone</Span>
        <Span gray normal f7 pl1>
          (optional)
        </Span>
      </FormItemLabel>
      <RRFControlText
        model={`tasksForm[${taskNumber}].contact.mobilePhone`}
        id="tasksForm.contact.mobilePhone"
        validators={{
          validPhoneNumber: isValidPhoneNumberFormat,
        }}
        errors={{
          validPhoneNumber: isInvalidPhoneNumberFormat,
        }}
      />
      <RRFErrors
        className="errors"
        model={`tasksForm[${taskNumber}].contact.mobilePhone`}
        show="touched"
        messages={{
          validPhoneNumber: 'Invalid phone number',
        }}
      />
    </Div>
  </Fieldset>
);
