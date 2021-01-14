import {
  CREATE_REMINDER,
  EDIT_REMINDER,
  DELETE_REMINDER,
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_REMINDER:
      return [...state, ...action.payload];

    case EDIT_REMINDER:
      return [
        ...state.map((reminder, i) => {
          if (i == action.id) {
            return action.payload[0];
          }

          return reminder;
        }),
      ];

    case DELETE_REMINDER:
      return [...state.filter((reminder, i) => i != action.id)];

    default:
      return state;
  }
};
