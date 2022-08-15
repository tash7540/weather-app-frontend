import * as api from '../api/index.js';

export const searchCity = (city) => async (dispatch) => {
  try {
    const { data } = await api.fetchCity(city);
    console.log(data);

    dispatch({ type: 'FETCH_CITY', payload: data });
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
};

export const searchForecastCity = (city) => async (dispatch) => {
  try {
    const {data}  = await api.fetchForecastCity(city);
    console.log(data);
    dispatch({ type: 'FETCH_FORECAST_CITY', payload: data });
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }

};
export const searchTimeLine = (city) => async (dispatch) => {
  try {
    const {data}  = await api.fetchTimeLine(city);
    console.log(data);
    dispatch({ type: 'FETCH_TIMELINE_CITY', payload: data });
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
};
