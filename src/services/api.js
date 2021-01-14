import Axios from 'axios';

const weatherAPI = Axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/weather',
});

export const getMainWeatherCity = async (cityName) => {
  try {
    const response = await weatherAPI.get('/', {
      params: {
        q: cityName,
        appid: process.env.REACT_APP_WEATHER_API_KEY,
      },
    });
    return response.data;
  } catch (err) {
    if (!err.response.data) {
      return 'There was a connection error';
    }
    return err;
  }
};
