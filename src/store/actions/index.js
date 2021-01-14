import {
  CREATE_REMINDER,
  EDIT_REMINDER,
  DELETE_REMINDER,
} from '../actions/types';

export const createReminder = (data) => {
  return {
    type: CREATE_REMINDER,
    payload: data,
  };
};

export const editReminder = (id, data) => {
  return {
    type: EDIT_REMINDER,
    id: id,
    payload: data,
  };
};

export const deleteReminder = (id) => {
  return {
    type: DELETE_REMINDER,
    id: id,
  };
};
