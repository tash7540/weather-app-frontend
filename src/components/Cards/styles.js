import { makeStyles } from '@material-ui/core/styles';
export default makeStyles({
  bigcard:{
    marginLeft:'25px',
    width:'450px',
    height:'280px',
    marginBottom:'28px',
    //backgroundColor:'#ECF8FF',
    borderColor:'#DDDFE1',
    borderStyle:'solid',

  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '150px',

    marginTop:'10px',
  },
  title:{
    display:"flex",
    padding:'10px',
    justifyContent: 'center',
  },
  titleText:{
    fontSize:'20px',
    fontWeight:'bold',

  },
});
