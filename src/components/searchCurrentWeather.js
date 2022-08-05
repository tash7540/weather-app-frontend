import React ,{useState,useEffect} from 'react';
//import useStyles from './styles';
import SearchBar from './searchBar.js'
import axios from 'axios';
import { TextField, Button, Typography, Paper,Grid,Container,CircularProgress  } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

const SearchCurrentWeather = () => {
    const posts = useSelector((state) => state.posts);


    return(
      !posts ? <CircularProgress/>:(
          <div className="wrapper">
            <h1>current weather data</h1>
            <ul>
              <li>Temperature(C): {posts.temp }</li>
              <li>Temperature(F): {posts.fahrenheit }</li>
              <li>condition: {posts.description }</li>
              <li>Pressure: {posts.pressure }</li>
              <li>Humidity: {posts.humidity }</li>
              <li>City: {posts.place }</li>
              <li>Time: {posts.timezone }</li>

          </ul>
        </div>
    )
    );

};


export default SearchCurrentWeather;
