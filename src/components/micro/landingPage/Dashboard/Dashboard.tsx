/*IMPORT UTILITIES*/
import { useState, useEffect } from 'react';
/*IMPORT COMPONENTS*/
import EachCard from './Card';
/*IMPORT CSS*/
import { Container, ActivityDetailBox, SubContainer } from './styledComponents';
/*IMPORT DATA*/
import { InvestValue } from './utilities';

const Dashboard = () => {
   const [investValue, setInvestValue] = useState<Array<InvestValue>>([]);

   useEffect(() => {}, []);

   return (
      <Container>
         <SubContainer></SubContainer>
         <ActivityDetailBox>
            {investValue.length > 0 &&
               investValue.map((source) => {
                  return (
                     <EachCard
                        name={source.name}
                        picture={source.picture}
                        value={source.value}
                     />
                  );
               })}
         </ActivityDetailBox>
      </Container>
   );
};

export default Dashboard;
