import React from 'react';
import { Typography,Grid,Container,CircularProgress,Card  } from '@material-ui/core';
import {useSelector } from 'react-redux';
import useStyles from './styles.js';
import ForecastCard from './card/forecastCard.js';

const Forecast = () => {
  const forecast = useSelector((state) => state.forecastData);
  const classes = useStyles();
  return(
    !forecast ? <CircularProgress/>:(
      <Card className={classes.bigcard}>
        <div className = {classes.title}>
          <Typography  className = {classes.titleText}>Weather Forecast</Typography>
        </div>
        <Container className={classes.card} >
            {forecast.slice(1,4).map(data=> (
              <Grid key ={data.day}>
                <ForecastCard data={data}/>
              </Grid>
            ))}

        </Container>
      </Card>
    )
  );

};
export default Forecast;
