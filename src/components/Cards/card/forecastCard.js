import React from 'react';
import {Typography,Card  } from '@material-ui/core';
import useStyles from './styles.js';



const ForecastCard = (data) =>{
    const classes = useStyles();
    const url = `http://openweathermap.org/img/wn/${data.data.icon}@2x.png`;

    return(

      <Card className = {classes.card}>
        <div>
          <Typography className = {classes.cardText}>{data.data.day}</Typography>
          <img src= {url} alt="icon"/>
          <Typography className = {classes.cardText}>{data.data.tempF}°F/{data.data.tempC}°C</Typography>
        </div>

      </Card>

    );
}
export default ForecastCard;
