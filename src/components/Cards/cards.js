import React ,{useState,useEffect} from 'react';
import { TextField, Button, Typography, Paper,Grid,Container,CircularProgress,Card  } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles.js';

const Cards = () => {
  const forecast = useSelector((state) => state.forecastData);
  const classes = useStyles();

  return(
    !forecast ? <CircularProgress/>:(
      <Card className={classes.bigcard}>
        <Container className={classes.card} >
            <Card className = {classes.current}> Day2: {forecast.day2_max }/{forecast.day2_min }</Card>
            <Card className = {classes.current}>Day3: {forecast.day3_max }/{forecast.day3_min }</Card>
            <Card className = {classes.current}>Day4: {forecast.day4_max }/{forecast.day4_min }</Card>
            <Card className = {classes.current}>Day5: {forecast.day5_max }/{forecast.day5_min }</Card>
        </Container>
      </Card>
  )
  );

};
export default Cards;