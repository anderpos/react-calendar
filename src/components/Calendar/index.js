import React, { useEffect, useState } from 'react';
import './styles.scss';

import { getToday } from '../../utils/date-utils';

import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';

const Calendar = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(getToday());

  useEffect(() => {
    if (onDateSelect) {
      onDateSelect(selectedDate);
    }
  }, [selectedDate]);

  return (
    <div className="calendar-container">
      <CalendarHeader
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <CalendarGrid selectedDate={selectedDate} />
    </div>
  );
};

export default Calendar;
