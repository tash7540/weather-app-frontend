import React ,{useState} from 'react';
import { TextField, Button,Grid } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './styles';
import { useDispatch} from 'react-redux';
import { searchCity,searchForecastCity} from '../../../actions/posts';


const SearchBar = ({data})=>{
  const classes = useStyles();
  const [postData, setPostData] = useState({city: ''});
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(postData.city);
    dispatch(searchCity({city:postData.city}));
    dispatch(searchForecastCity({city:postData.city}));
    clear();
  };

  const clear = () => {
      setPostData({ city: ''});
  };
  return(

      <form className = {classes.search} autoComplete="off" noValidate  onSubmit={handleSubmit}>
        <Grid className = {classes.search} lg = "12">
            <TextField className={classes.searchItem} name="search" size = "large" variant="outlined" label="Search By City" fullWidth value={postData.city} onChange={(e) => setPostData({ ...postData, city: e.target.value })} />
            <Button  variant="contained" color="primary" size="small" type="submit"><SearchIcon/></Button>
        </Grid>
      </form>

  );


}

export default SearchBar;
