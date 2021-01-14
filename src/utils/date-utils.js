const moment = require('moment');
const { totalDatesPerMonth } = require('../constants/months');

export const getSpecificDate = (month, dayOfMonth, year) => {
  return moment(`${month}-${dayOfMonth}-${year}`, 'MM-DD-YYYY').toDate();
};

export const getDayOfMonth = (date) => moment(date).date();

export const getMonth = (date) => moment(date).month();

export const getYear = (date) => moment(date).year();

export const getToday = () => moment().toDate();

export const getDateISO = (date) => moment(date).format('YYYY-MM-DD');

export const getTime = (date) => moment(date).format('hh:mm');

const getPrevMonthYear = (month, year) => {
  if (month === 1) {
    return {
      month: 12,
      year: year - 1,
    };
  } else {
    return {
      month: month - 1,
      year,
    };
  }
};

const getNextMonthYear = (month, year) => {
  if (month === 12) {
    return {
      month: 1,
      year: year + 1,
    };
  } else {
    return {
      month: month + 1,
      year,
    };
  }
};

export const getDatesInMonthToDisplay = (month, year) => {
  const daysInMonth = moment(`${month}-${year}`, 'MM-YYYY').daysInMonth();
  const firstWeekday = moment(`${month}-${year}`, 'MM-YYYY')
    .startOf('month')
    .weekday();
  const result = [];
  const prevMonthYear = getPrevMonthYear(month, year);
  const prevDaysInMonth = moment(
    `${prevMonthYear.month}-${prevMonthYear.year}`,
    'MM-YYYY'
  ).daysInMonth();
  for (let i = firstWeekday - 1; i >= 0; i--) {
    result.push({
      currentMonth: false,
      date: getSpecificDate(
        prevMonthYear.month,
        prevDaysInMonth - i,
        prevMonthYear.year
      ),
    });
  }

  for (let j = 1; j <= daysInMonth; j++) {
    result.push({
      currentMonth: true,
      date: getSpecificDate(month, j, year),
    });
  }

  if (result.length < totalDatesPerMonth) {
    const daysToAdd = totalDatesPerMonth - result.length;
    const nextMonthYear = getNextMonthYear(month, year);
    for (let k = 1; k <= daysToAdd; k++) {
      result.push({
        currentMonth: false,
        date: getSpecificDate(nextMonthYear.month, k, nextMonthYear.year),
      });
    }
  }

  return result;
};

export const getMonthSet = (selectDate) => {
  const month = getMonth(selectDate) + 1;
  const result = {
    current: selectDate,
    prev: getSpecificDate(month - 1, 1, getYear(selectDate)),
    next: getSpecificDate(month + 1, 1, getYear(selectDate)),
  };

  if (month === 1) {
    result.prev = getSpecificDate(12, 1, getYear(selectDate) - 1);
  }

  if (month === 12) {
    result.next = getSpecificDate(1, 1, getYear(selectDate) + 1);
  }

  return result;
};
