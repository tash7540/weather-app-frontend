import axios from 'axios';

const url ='https://weather-checker-tash7540.herokuapp.com/search';

export const fetchCity = (city) => axios.post(`${url}/currentWeather`,city);
export const fetchForecastCity = (city) => axios.post(`${url}/forecastWeather`,city);
export const fetchTimeLine = (city) => axios.post(`${url}/HistoricalWeather`,city);
