import React from 'react';
import './styles.scss';

import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getTime, getDateISO } from '../../utils/date-utils';

import ReminderItem from './ReminderItem';

const ReminderList = ({ reminders, date }) => {
  const history = useHistory();

  const editEvent = (i) => {
    history.push(`/events/edit/${i}`);
  };

  const remindersDate = () => {
    let result = [];
    reminders.forEach((reminder, i) => {
      if (getDateISO(date) === getDateISO(reminder.dateTime)) {
        result.push(
          <ReminderItem
            key={i}
            editAction={() => editEvent(i)}
            bgColor={reminder.color}
            dateTime={getTime(reminder.dateTime)}
            description={reminder.description}
            city={reminder.city}
          />
        );
      }
    });
    return result;
  };

  return <div className="reminder-list">{remindersDate()}</div>;
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ReminderList);
