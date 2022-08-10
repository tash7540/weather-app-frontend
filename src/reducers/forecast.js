export default (forecastData = [], action) => {
  switch (action.type) {

    case 'FETCH_FORECAST_CITY':
    return action.payload;

    default:
      return forecastData;
  }
};
