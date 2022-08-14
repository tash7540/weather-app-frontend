import { makeStyles } from '@material-ui/core/styles';
export default makeStyles({
  bigcard:{
    marginLeft:'25px',
    width:'450px',
    height:'280px',
    marginBottom:'20px',
    backgroundColor:'#DEDEDE',

  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '150px',
    //backgroundColor:'rgb(40, 44, 52)',
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
