/*IMPORT COMPONENTS*/
import Pastel from './Pastel/Pastel';
import LinealScale from './LinearScale/LinearScale';
/*IMPORT CSS*/
import { Box } from '@mui/material';
import { Container } from './styledComponents';

const Graficos = () => {
   return (
      <Container>
         <Pastel />
         <LinealScale />
      </Container>
   );
};

export default Graficos;
