import React from 'react';
import { shallow } from 'enzyme';
import ReminderModal from './index';
import configureMockStore from 'redux-mock-store';
import { createReminder } from '../../store/actions';
import { CREATE_REMINDER } from '../../store/actions/types';

const mockStore = configureMockStore();
const store = mockStore({});

it('renders the modal without errors', () => {
  shallow(<ReminderModal store={store} />);
});

it('should create an action to add the reminder', () => {
  const reminder = {
    dateTime: '2021-01-01T00:00',
    color: '#ffffff',
    description: 'test description',
    city: 'test city',
  };

  const expectedAction = {
    type: CREATE_REMINDER,
    payload: reminder,
  };
  expect(createReminder(reminder)).toEqual(expectedAction);
});
