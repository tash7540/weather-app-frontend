import {LineChart} from 'react-easy-chart';
import { Container, AppBar, Typography, Grow, Grid,Card } from '@material-ui/core';


const Chart = ()=>{
  return(
    <Card>
      <LineChart
        xType={'time'}
        axes
        interpolate={'cardinal'}
        width={650}
        height={270}
        data={[
          [
            { x: '1-Jan-15', y: 20 },
            { x: '1-Feb-15', y: 10 },
            { x: '1-Mar-15', y: 33 },
            { x: '1-Apr-15', y: 45 },
            { x: '1-May-15', y: 15 }
          ]
        ]}
      />
    </Card>
  );
};

export default Chart;
