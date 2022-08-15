import {LineChart} from 'react-easy-chart';
import { Container, AppBar, Typography, Grow, Grid,Card } from '@material-ui/core';
import {useSelector } from 'react-redux';

const Chart = ()=>{
  const timelinedata = useSelector((state) => state.timelineData);
  //timelinedata.weatherData.map((data) =>{
  //  console.log(data);
  //});
  //console.log(timelinedata.weatherData[50]);
  return(
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
          timelinedata.weatherData
        ]
        }
      />
    </Card>
  );
};

export default Chart;
