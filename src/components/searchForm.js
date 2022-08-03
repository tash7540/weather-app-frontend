import React ,{useState,useEffect} from 'react';
//import useStyles from './styles';
import Card from './Card/card.js';
import axios from 'axios';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
//import FileBase from 'react-file-base64'
//import { useDispatch, useSelector } from 'react-redux';
//import { createPost,updatePost } from '../../actions/posts';
//Get the current id

const SearchForm = () => {
    const [postData, setPostData] = useState({city: ''});

    const [weatherData,setWeatherData] = useState();

  //  useEffect(()=>{
  //    axios.get('http://localhost:5000/default').then((response) => {
  //      console.log(response.data);
  //      setWeatherData(response.data);
  //    }, (error) => {
  //      alert('invalid Value!');
  //    });
  //  },[])

    const handleSubmit = (e) =>{
      e.preventDefault();
      axios.post('http://localhost:5000/search',postData).then((response) => {
        console.log("TT"+response.data);
        setWeatherData(response.data);
      }, (error) => {
        console.log(error);
      });
      clear();
    };

    const clear = () => {
        setPostData({ city: ''});
    };
    return(
        <Paper>
          <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
            <div>{!weatherData ? <h1>NO</h1>: (<Typography variat = "h6" >{JSON.stringify(weatherData)}</Typography>)}</div>
            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.city} onChange={(e) => setPostData({ ...postData, city: e.target.value })} />
            <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
          </form>
        </Paper>
    );

};


export default SearchForm;
