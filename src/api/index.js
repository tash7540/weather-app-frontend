import axios from 'axios';

const url = 'http://localhost:5000/search';

export const fetchCity = (city) => axios.post(`${url}/currentWeather`,city);
export const fetchForecastCity = (city) => axios.post(`${url}/forecastWeather`,city);
