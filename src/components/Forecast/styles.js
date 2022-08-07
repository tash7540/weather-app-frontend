import { makeStyles } from '@material-ui/core/styles';
//import img from '../img/summer.avif';
export default makeStyles({
  search:{
    display: 'flex',
    flexDirection: 'row',
  },
  searchItem:{
    marginTop:'10px',
  },
  forecast:{
    marginTop:'20px',
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    //justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    //backgroundColor:'rgb(40, 44, 52)',
    marginTop:'40px',
  },

  date:{
    padding:'15px',
    marginLeft:'10px',
    fontSize:'15px',

  },
  current:{
    padding:'10px',
    marginLeft:'10px',
    fontSize:'15px',
    fontColor:'white',
  },


});
