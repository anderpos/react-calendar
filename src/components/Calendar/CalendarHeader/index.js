import React from 'react';
import './styles.scss';

import { useHistory } from 'react-router-dom';

import { getMonth, getMonthSet } from '../../../utils/date-utils';
import { monthsFull, weekdays } from '../../../constants/months';

import { ArrowLeft } from '../../../assets/icons/ArrowLeft';
import { ArrowRight } from '../../../assets/icons/ArrowRight';

const CalendarHeader = ({ selectedDate, setSelectedDate }) => {
  const history = useHistory();

  const changeDate = (evt) => {
    setSelectedDate(evt.target.getAttribute('data-date'));
  };

  const monthSet = getMonthSet(selectedDate);

  const weekdayIcons = weekdays.map((day, key) => {
    return (
      <div className="weekday-indicator-icon" key={key}>
        {day}
      </div>
    );
  });

  const createEvent = () => {
    history.push('/events/create');
  };

  return (
    <>
      <div className="month-indicator">
        <span
          className="month-button"
          data-date={monthSet.prev}
          onClick={changeDate}
        >
          <ArrowLeft className="month-arrow" />
          {monthsFull[getMonth(monthSet.prev)]}
        </span>
        <span>{monthsFull[getMonth(monthSet.current)]}</span>
        <span
          className="month-button"
          data-date={monthSet.next}
          onClick={changeDate}
        >
          {monthsFull[getMonth(monthSet.next)]}
          <ArrowRight className="month-arrow" />
        </span>
      </div>
      <button className="event-button" onClick={createEvent}>
        Create Event
      </button>
      <div className="weekday-indicators">{weekdayIcons}</div>
    </>
  );
};

export default CalendarHeader;
