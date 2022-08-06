import React ,{useState,useEffect} from 'react';
import useStyles from './styles';
import SearchBar from './searchBar.js'
import axios from 'axios';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { TextField, Button, Typography, Paper,Card,CardMedia,CardContent,CardActions,Grid,CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

/*<Typography className = {classes.current}>Temperature(C): {posts.temp }</Typography>
<Typography className = {classes.current}>Temperature(F): {posts.fahrenheit }</Typography>
<Typography className = {classes.current}>condition: {posts.description }</Typography>
<Typography className = {classes.current}>Pressure: {posts.pressure }</Typography>
<Typography className = {classes.current}>Humidity: {posts.humidity }</Typography>
<Typography className = {classes.current}>City: {posts.place }</Typography>*/


const SearchCurrentWeather = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();


    return(
      !posts ? <CircularProgress/>:(
          <Card className={classes.card}>

            <Typography  className = {classes.date}>{posts.date }</Typography>
            <div className = {classes.time}>
              <AccessTimeIcon className = {classes.timeIcon}/>
              <Typography className={classes.current}>{posts.time }</Typography>
            </div>
            <Typography className = {classes.current}>Temperature(C): {posts.temp }</Typography>
            <Typography className = {classes.current}>Temperature(F): {posts.fahrenheit }</Typography>
            <Typography className = {classes.current}>condition: {posts.description }</Typography>
            <Typography className = {classes.current}>Pressure: {posts.pressure }</Typography>
            <Typography className = {classes.current}>Humidity: {posts.humidity }</Typography>
            <Typography className = {classes.current}>City: {posts.place }</Typography>
          </Card>
    )
    );

};


export default SearchCurrentWeather;
