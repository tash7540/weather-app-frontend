import React ,{useState,useEffect} from 'react';
import { TextField, Button, Typography, Paper,Grid,Container,CircularProgress,Card  } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles.js';
import SearchBar from './searchBar/searchBar.js';

const SearchForecast = () => {
  const forecast = useSelector((state) => state.forecastData);
  const classes = useStyles();

  return(
    !forecast ? <CircularProgress/>:(
      <div className={classes.card}>
        <Container>
          <SearchBar className={classes.search}/>
        </Container>
        <Container className={classes.forecast} >
            <Typography className = {classes.current}> Day2: {forecast.day2_max }/{forecast.day2_min }</Typography>
            <Typography className = {classes.current}>Day3: {forecast.day3_max }/{forecast.day3_min }</Typography>
            <Typography className = {classes.current}>Day4: {forecast.day4_max }/{forecast.day4_min }</Typography>
            <Typography className = {classes.current}>Day5: {forecast.day5_max }/{forecast.day5_min }</Typography>
        </Container>
    </div>
  )
  );

};
export default SearchForecast;
