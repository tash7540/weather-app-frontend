import './App.css';
import React ,{useEffect} from "react";
import SearchCurrentWeather  from './components/Current/searchCurrentWeather.js';
import SearchDetails  from './components/Forecast/searchDetails.js';
import Forecast from './components/Cards/forecast.js';
import { Container, AppBar, Typography, Grow, Grid,Card } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import {searchCity,searchForecastCity } from './actions/posts';

function App() {

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const forecast = useSelector((state) => state.forecastData);
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
            <Grid item xs={8} sm={8} lg={7}>
              <SearchCurrentWeather/>
            </Grid>
              <Grid item xs={8} sm={8} lg ={5}>
                <Grid>
                  <SearchDetails/>
                </Grid>
                <Grid>
                  <Forecast/>
                </Grid>
              </Grid>
          </Grid>
        </Container>
      </Container>
    </div>

  );
}

export default App;
