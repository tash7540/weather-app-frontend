import { makeStyles } from '@material-ui/core/styles';
export default makeStyles({
  search:{
    display: 'flex',
    flexDirection: 'row',

  },
  searchContainer:{
    marginTop:'20px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '15px',
    borderColor:'black',
    height: '100%',
    position: 'relative',
    //backgroundColor:'rgb(40, 44, 52)',
    marginTop:'40px',
  },
  details:{
    marginLeft:'25px',
    marginTop:'25px',
    marginBottom:'25px',
    //backgroundColor:'#ECF8FF',
    borderColor:'#DDDFE1',
    borderStyle:'solid',
    color:'black',
    width:'450px',

  },
  data:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:'10px',
    marginBottom:'10px',

  },
});
