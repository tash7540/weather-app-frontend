import React from 'react';
import { Typography,Grid,Container,CircularProgress,Card} from '@material-ui/core';
import {useSelector } from 'react-redux';
import useStyles from './styles.js';
import SearchBar from './searchBar/searchBar.js';

const SearchDetails = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return(
    !posts ? <CircularProgress/>:(
      <div className={classes.card}>
        <Container>
          <SearchBar className={classes.search}/>
        </Container>
        <Card className = {classes.details}>
          <Container >
          <Typography className = {classes.data}> Pressure:{posts.pressure } hPa</Typography>

              <Typography className = {classes.data}> Pressure:{posts.pressure } hPa</Typography>
              <Typography className = {classes.data}>Humidity: {posts.humidity }%</Typography>
              <Typography className = {classes.data}>Wind: {posts.windSpeed }</Typography>
              <Typography className = {classes.data}>Clouds: {posts.clouds }%</Typography>

          </Container>
        </Card>
    </div>
  )
  );

};
export default SearchDetails;
