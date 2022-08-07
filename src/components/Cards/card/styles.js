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
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    //justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    backgroundColor:'rgb(40, 44, 52)',
    marginTop:'40px',
  },
  time:{
    marginLeft:'25px',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',

  },
  timeIcon:{
    lineHeight: '200px',
    height: '200px',
    textAlign: 'center',
    fontSize:'40px',
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
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    textAlign:'center',
    fontSize:'50px',
    padding: '0 40px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
