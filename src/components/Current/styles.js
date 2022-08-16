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
    fontSize:'30px',
    fontWeight: 'bold',
  },
  date:{
    fontSize:'20px',

  },
  dayndate:{
    display:'flex',
    flexDirection: 'column',
    marginTop:'80px',
    padding:'10px',
    marginLeft:'80px',



  },
  description:{
    display:'flex',
    flexDirection: 'column',
    marginLeft:'60px',
  },
  icon:{
    marginLeft:'80px',
    alignItems:'center',


  },
  descriptionIcon:{
    alignItems:'center',
    width:'100px',
    height:'100px',
  },
  descriptionText:{
    fontWeight:'bold',
    fontSize:'20px',

  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '15px',
    position: 'relative',
    backgroundColor:'white',
    backgroundImage:`url(${img})`,//'rgb(40, 44, 52)',
    opacity: '0.5',
    marginBottom:'20px',
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
  x:{
    //marginTop:'110px',
    //marginBottom:'60px',
    alignItems:'center',

  },
  temps:{
    marginTop:'90px',
    marginLeft:'40px',
    fontSize:'30px',
    fontWeight: 'bold',

  },
  bottom:{
    display: 'flex',
    flexDirection: 'row',
    marginBottom:'10px',
  },


});
