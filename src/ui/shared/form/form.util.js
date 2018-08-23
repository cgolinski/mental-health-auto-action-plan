export const isValidString = val => val && val.length;

export const isEmpty = val => !val || !val.length;

export const isValidEmailFormat = val =>
  val && val.indexOf('@') > 0 && val.indexOf('.') > 2;

export const isInvalidEmailFormat = val =>
  val && (val.indexOf('@') <= 0 || val.indexOf('.') <= 2);

export const isValidPhoneNumberFormat = val =>
  val &&
  val.replace(/\D/g, '').length > 3 &&
  val.replace(/\D/g, '').length < 17;

export const isInvalidPhoneNumberFormat = val =>
  val &&
  (val.replace(/\D/g, '').length > 16 || val.replace(/\D/g, '').length < 4);
