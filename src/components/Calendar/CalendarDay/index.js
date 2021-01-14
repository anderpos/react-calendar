import React from 'react';
import './styles.scss';

import ReminderList from '../../ReminderList';

import { getDayOfMonth, getDateISO } from '../../../utils/date-utils';

const CalendarDay = ({ selectedDate, changeDate, date, currentMonth }) => {
  const selected =
    getDateISO(selectedDate) === getDateISO(date) ? 'selected' : '';

  const activeMonth = currentMonth ? '' : 'inactive';

  return (
    <div
      className={`date-icon ${selected} ${activeMonth}`}
      data-date={date.toString()}
      onClick={changeDate}
    >
      <span className="date-day">{getDayOfMonth(date)}</span>
      <ReminderList date={date} />
    </div>
  );
};

export default CalendarDay;
