import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect} from "react";
import SearchCurrentWeather  from './components/Current/searchCurrentWeather.js';
import SearchForecastWeather  from './components/Forecast/searchForecast.js';
import useStyles from './components/styles.js';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import { searchDefault,searchCity,searchForecastCity } from './actions/posts';

function App() {

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const forecast = useSelector((state) => state.forecastData);
  const classes = useStyles();
  useEffect(() => {
    dispatch(searchCity({city:'boulder'}));
    dispatch(searchForecastCity({city:'boulder'}));

  }, []);

  return (
    <div className = "App">
      <Container maxWidth="xl">
        <Container maxWidth = "lg">
          <AppBar className="appBar" position="static" color="inherit">
            <Typography variant="h2" align="center">Weather Checker</Typography>
          </AppBar>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={8} sm={7} lg={7}>
              <SearchCurrentWeather/>
            </Grid>
            <Grid item xs={4} sm={3} lg ={5}>
              <Grid>
              <SearchForecastWeather/>
              </Grid>
              <Grid>
              <SearchForecastWeather/>

              </Grid>
            </Grid>

          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default App;
