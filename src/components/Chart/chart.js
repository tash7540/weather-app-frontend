import {LineChart} from 'react-easy-chart';
import { Container, AppBar, Typography, Grow, Grid,Card } from '@material-ui/core';
import {useSelector } from 'react-redux';

const Chart = ()=>{
  const timelinedata = useSelector((state) => state.timelineData);
  console.log('a'+timelinedata.weatherData);
  return(
    <Card>
      <LineChart
        axisLabels={{x: 'Time', y: 'Temp'}}
        margin={{top: 10, right: 30, bottom: 50, left: 70}}
        xType={'time'}
        axes
        interpolate={'cardinal'}
        width={650}
        height={270}
        data={[
          //timelinedata.weatherData
          [
            { x: '1-Jan-15', y: 20 },
            { x: '1-Feb-15', y: 10 },
            { x: '1-Mar-15', y: 33 },
            { x: '1-Apr-15', y: 45 },
            { x: '1-May-15', y: 15 }
          ]
        ]
        }
      />
    </Card>
  );
};

export default Chart;
