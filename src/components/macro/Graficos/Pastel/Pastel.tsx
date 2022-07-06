/*IMPORT UTILITIES*/
import { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
/*IMPORT CSS*/
import { Container } from './styledComponents';
/*IMPORT DATA*/
import { Data, PastelProperties, calulatePastelPorcentages } from './utilities';

const Pastel = ({ investOptions }: PastelProperties) => {
   const [data, setData] = useState<Data>({ labels: [], datasets: [] });

   useEffect(() => {
      setData(calulatePastelPorcentages(investOptions));
   }, [investOptions]);

   return (
      <Container>
         <Pie data={data} />
      </Container>
   );
};

export default Pastel;
