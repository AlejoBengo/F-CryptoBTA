/*IMPORT UTILITIES*/
import { Line } from 'react-chartjs-2';
/*IMPORT CSS*/
import { Box } from '@mui/material';
/*IMPORT DATA*/
import { options, data } from './utilities';

const LinearScale = () => {
   return (
      <Box
         style={{
            backgroundColor: 'lightblue',
            width: '48vw',
         }}
      >
         <Line data={data} options={options} />
      </Box>
   );
};

export default LinearScale;
