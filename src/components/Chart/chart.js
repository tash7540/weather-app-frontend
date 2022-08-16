import {LineChart} from 'react-easy-chart';
import { Container, AppBar, Typography, Grow, Grid,Card,CircularProgress } from '@material-ui/core';
import {useSelector } from 'react-redux';

const Chart = ()=>{
  const timelinedata = useSelector((state) => state.timelineData);
  console.log(timelinedata);
  return(
    !timelinedata.length ?<CircularProgress style={{marginLeft:'190px',padding:'131px'}}/>:(
      <div>
      <Card>
      <Typography style={{textAlign:'center',fontSize:'20px',fontWeight:'bold',padding:'10px'}}>Temperature Change Over Time (past week)</Typography>

        <LineChart
          axes
          margin={{top: 10, right: 30, bottom: 50, left: 70}}
          axisLabels={{x: 'Time', y: 'Temperature'}}
          xType={'text'}
          interpolate={'cardinal'}
          width={650}
          height={248}
          data={[
            timelinedata
          ]
          }
        />
      </Card>
      </div>
    )
  );
};

export default Chart;
