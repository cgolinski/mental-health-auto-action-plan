import { Control, Errors, Form } from 'react-redux-form';
import styled from 'tachyons-components';

export const RRFForm = styled(Form)`
  measure center
`;
RRFForm.displayName = 'RRFForm';

export const Legend = styled('legend')`
  f4 fw6 ph0 mh0
`;
Legend.displayName = 'Legend';

export const SubmitButton = styled('button')`
b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib
`;
SubmitButton.displayName = 'SubmitButton';
// CAROLINE: Why is hover grow style not working?

export const Fieldset = styled('fieldset')``;
Fieldset.displayName = 'Fieldset';

export const FormItemLabel = styled('label')`
  db fw6 lh-copy f6
`;
FormItemLabel.displayName = 'FormItemLabel';

export const RRFControlText = styled(Control.text)`
  border-box pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100
`;
// CAROLINE TODO: Why are hover styles not working?
RRFControlText.displayName = 'RRFControlText';

export const RRFErrors = styled(Errors)`
  pt1 bg-transparent red flex flex-column f6
`;
RRFErrors.displayName = 'RRFErrors';
