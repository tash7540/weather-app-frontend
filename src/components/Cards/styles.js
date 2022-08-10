import { makeStyles } from '@material-ui/core/styles';
export default makeStyles({
  bigcard:{
    marginTop:'40px',
    marginLeft:'25px',
    width:'450px',
    height:'326px',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '150px',
    position: 'relative',
    //backgroundColor:'rgb(40, 44, 52)',
    marginTop:'10px',
  },
  title:{
    margin:'20px',
    padding:'10px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText:{
    fontSize:'25px',
    fontWeight:'bold',
    marginLeft:'80px',

  },


});
