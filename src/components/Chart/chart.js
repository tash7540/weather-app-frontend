import {LineChart} from 'react-easy-chart';
import { Container, AppBar, Typography, Grow, Grid,Card,CircularProgress } from '@material-ui/core';
import {useSelector } from 'react-redux';

const Chart = ()=>{
  const timelinedata = useSelector((state) => state.timelineData);
  console.log(timelinedata);
  return(
    !timelinedata.length ?<CircularProgress/>:(
      <Card>
        <LineChart
          axisLabels={{x: 'Time', y: 'Temp'}}
          margin={{top: 10, right: 30, bottom: 50, left: 70}}
          xType={'text'}
          axes
          interpolate={'cardinal'}
          width={650}
          height={270}
          data={[
            timelinedata
          ]
          }
        />
      </Card>
    )
  );
};

export default Chart;
