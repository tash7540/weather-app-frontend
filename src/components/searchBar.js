//import useStyles from './styles';
import React ,{useState,useEffect} from 'react';
import { TextField, Button, Typography, Paper,Card,CardMedia,CardContent,CardActions,Grid } from '@material-ui/core';

import axios from 'axios';
//import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux';
import { searchDefault,searchCity } from '../actions/posts';


const SearchBar = ({data})=>{
  //const classes = useStyles();
  const [postData, setPostData] = useState({city: ''});
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(postData.city);
    dispatch(searchCity({city:postData.city}));

    clear();
  };

  const clear = () => {
      setPostData({ city: ''});
  };
  return(

    <Paper>
      <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
        <TextField name="creator" variant="outlined" label="Search By City" fullWidth value={postData.city} onChange={(e) => setPostData({ ...postData, city: e.target.value })} />
        <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>

  );


}

export default SearchBar;
