import React from 'react';
import './styles.scss';

import CalendarDay from '../CalendarDay';

import {
  getDatesInMonthToDisplay,
  getMonth,
  getYear,
} from '../../../utils/date-utils';

const CalendarGrid = ({ selectedDate }) => {
  const datesInMonth = getDatesInMonthToDisplay(
    getMonth(selectedDate) + 1,
    getYear(selectedDate)
  );

  const monthDates = datesInMonth.map((dates, key) => {
    return (
      <CalendarDay
        selectedDate={selectedDate}
        date={dates.date}
        currentMonth={dates.currentMonth}
        key={key}
      />
    );
  });

  return <div className="calendar-dates-grid">{monthDates}</div>;
};

export default CalendarGrid;
