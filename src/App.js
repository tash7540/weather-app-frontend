import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect} from "react";
import SearchBar from './components/searchBar.js';
import SearchCurrentWeather  from './components/searchCurrentWeather.js';
import SearchForecastWeather  from './components/searchForecast.js';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import { searchDefault,searchCity,searchForecastCity } from './actions/posts';

function App() {

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const forecast = useSelector((state) => state.forecastData);

  useEffect(() => {
    dispatch(searchCity({city:'boulder'}));
    dispatch(searchForecastCity({city:'boulder'}));

  }, []);

  return (
    <Container maxWidth="lg">
    <AppBar position="static" color="inherit">
      <Typography variant="h2" align="center">Weather Checker</Typography>
    </AppBar>
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
          <SearchForecastWeather/>
          <SearchCurrentWeather/>
          </Grid>
          <Grid item xs={12} sm={7}>
            <SearchBar/>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  </Container>
  );
}

export default App;
