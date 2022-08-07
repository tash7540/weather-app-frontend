import { makeStyles } from '@material-ui/core/styles';
import img from '../../img/flower.jfif';
export default makeStyles({
  place:{
    marginTop:'20px',
    marginLeft:'40px',
    fontSize:'30px',
    fontWeight: 'bold',
  },
  day:{
    marginLeft:'60px',
    fontSize:'30px',
    fontWeight: 'bold',
  },
  date:{
    marginLeft:'60px',
    fontSize:'20px',

  },
  dayndate:{
    display:'flex',
    flexDirection: 'column',
    marginTop:'30px',


  },
  description:{
    display:'flex',
    flexDirection: 'column',
    marginLeft:'60px',
  },
  descriptionIcon:{
    marginLeft:'400px',

    width:'150px',
    height:'150px',
  },
  descriptionText:{
    marginTop:'30px',
    fontWeight:'bold',
    fontSize:'30px',

  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    //justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    backgroundColor:'white',
    backgroundImage:`url(${img})`,//'rgb(40, 44, 52)',
    opacity: '0.5',

    marginTop:'40px',
  },
  time:{
    marginLeft:'10px',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    fontSize:'25px',


  },
  timeIcon:{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft:'30px',

  },

  current:{
    padding:'10px',
    marginLeft:'10px',
    fontSize:'15px',
    fontColor:'white',
  },
  x:{
    margin:'80px',
  },
  temps:{
    marginTop:'30px',
    marginLeft:'40px',
    fontSize:'40px',
    fontWeight: 'bold',

  },
  bottom:{
    display: 'flex',
    flexDirection: 'row',
  },


});
