import React ,{useState,useEffect} from 'react';
import SearchBar from '../Forecast/searchBar/searchBar.js'
import axios from 'axios';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { TextField, Button, Typography, Paper,Card,CardMedia,CardContent,CardActions,Grid,CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';

const SearchCurrentWeather = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    console.log(posts.icon);
    return(
      !posts ? <CircularProgress/>:(
        <Card className={classes.card}>
          <Typography  className = {classes.place}>{posts.place}</Typography>
          <div className = {classes.time}>
            <Grid>
              <AccessTimeIcon className = {classes.timeIcon}/>
            </Grid>
            <Grid>
              <Typography >{posts.time }</Typography>
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
