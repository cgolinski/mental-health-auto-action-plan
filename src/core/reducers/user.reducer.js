// import { ACTION_TYPES } from '../actions/actionTypes';

const initialUserState = {
  firstName: '',
  lastName: '',
  email: '',
  mobilePhone: null
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
