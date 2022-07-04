/*IMPORT UTILITIES*/
import { Pie } from 'react-chartjs-2';
/*IMPORT CSS*/
import { Container } from './styledComponents';
/*IMPORT DATA*/
import { data } from './utilities';

const Pastel = () => {
   return (
      <Container>
         <Pie data={data} />
      </Container>
   );
};

export default Pastel;
