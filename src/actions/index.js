import axios from 'axios';
import config from '../config/config';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${config.API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country='us') {
  const url = `${ROOT_URL}&q=${city},${country}`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
