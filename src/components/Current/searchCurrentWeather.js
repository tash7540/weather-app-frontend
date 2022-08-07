import React ,{useState,useEffect} from 'react';
import useStyles from './styles';
import SearchBar from '../Forecast/searchBar/searchBar.js'
import axios from 'axios';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { TextField, Button, Typography, Paper,Card,CardMedia,CardContent,CardActions,Grid,CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

/*<Typography className = {classes.current}>Temperature(C): {posts.temp }</Typography>
<Typography className = {classes.current}>Temperature(F): {posts.fahrenheit }</Typography>
<Typography className = {classes.current}>condition: {posts.description }</Typography>
<Typography className = {classes.current}>Pressure: {posts.pressure }</Typography>
<Typography className = {classes.current}>Humidity: {posts.humidity }</Typography>
<Typography className = {classes.current}>City: {posts.place }</Typography>

???
<Typography  className = {classes.day}>{posts.day}</Typography>
<Typography  className = {classes.date}>{posts.date}</Typography>
<div className = {classes.time}>
  <Grid>
    <AccessTimeIcon className = {classes.timeIcon}/>
  </Grid>
  <Grid>
    <Typography className={classes.time}>{posts.time }</Typography>
  </Grid>
</div>*/

const SearchCurrentWeather = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();


    return(
      !posts ? <CircularProgress/>:(
          <Card className={classes.card}>
            <Typography  className = {classes.place}>{posts.place}</Typography>
            <div className = {classes.time}>
              <Grid>
                <AccessTimeIcon className = {classes.timeIcon}/>
              </Grid>
              <Grid>
                <Typography className={classes.time}>{posts.time }</Typography>
              </Grid>
            </div>
            <div className={classes.x}>
            <img className={classes.descriptionIcon} src={posts.icon} alt="icon"/>

            </div>
            <div className={classes.bottom}>
              <Typography  className = {classes.temps}>{posts.fahrenheit}°F/{posts.temp }°C</Typography>
              <div className={classes.dayndate}>
                <Typography className ={classes.day}> {posts.day}</Typography>
                <Typography  className = {classes.date}>{posts.date}</Typography>
              </div>
              <div className={classes.description}>

                <Typography className={classes.descriptionText} >{posts.description }</Typography>
              </div>
            </div>



          </Card>
    )
    );

};


export default SearchCurrentWeather;
