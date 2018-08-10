import { ACTION_TYPES } from '../actions/actionTypes';

const DEFAULT_STATE = {
  shouting: false
};

export const shoutReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_SHOUT:
      return { ...state, shouting: !state.shouting };
    default:
      return state;
  }
};
