import React, { useState, useEffect } from 'react';
import './styles.scss';

import { getMainWeatherCity } from '../../../services/api';

const ReminderItem = ({ editAction, bgColor, dateTime, description, city }) => {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    (async () => {
      const result = await getMainWeatherCity(city);
      if (!result.weather) {
        setWeather('?');
      } else {
        setWeather(result.weather[0].main);
      }
    })();
  }, [city]);

  return (
    <div
      onClick={editAction}
      style={{ backgroundColor: bgColor }}
      className="reminder-item"
    >
      <span className="reminder-time">{`${dateTime} - `}</span>
      <span className="reminder-description">{description}</span>
      <br />
      <span className="reminder-city">{`${city} [${weather}]`}</span>
    </div>
  );
};

export default ReminderItem;
