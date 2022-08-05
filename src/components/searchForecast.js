import React ,{useState,useEffect} from 'react';
import { TextField, Button, Typography, Paper,Grid,Container,CircularProgress  } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';


const SearchForecast = () => {
  const forecast = useSelector((state) => state.forecastData);


  return(
    !forecast ? <CircularProgress/>:(
        <div className="wrapper">
          <h1>Five Day Weather Forecast (Avg)</h1>
          <ul>
            <li>Day1: {forecast.day1_max }/{forecast.day1_min }</li>
            <li>Day2: {forecast.day2_max }/{forecast.day2_min }</li>
            <li>Day3: {forecast.day3_max }/{forecast.day3_min }</li>
            <li>Day4: {forecast.day4_max }/{forecast.day4_min }</li>
            <li>Day5: {forecast.day5_max }/{forecast.day5_min }</li>


        </ul>
      </div>
  )
  );

};
export default SearchForecast;
