/*IMPORT UTILITIES*/
import { Link } from 'react-scroll';
import { useState } from 'react';
/*IMPORT COMPONENTS*/
import Particle from '../../../particles/Particle';
import Subscribe from './Subscribe';
/*IMPORT CSS*/
import { Box } from '@mui/material';
import {
   TextBox,
   Title,
   Title2,
   Title3,
   SubTitle,
   Arrow,
   ArrowBox,
   Text,
} from './styledComponents';
/*IMPORT DATA*/
import { desciption } from './text';

const LandingPage = () => {
   const [charge, setCharge] = useState<boolean>(false);

   const handleScrolling = (event: any) => {
      setCharge(!charge);
   };

   return (
      <Box>
         {!charge ? (
            <TextBox>
               <Title>BTA</Title>
               <Title3>PROTOCOL</Title3>
               <Title2>BUSINESS TARGET ANALYTIC</Title2>
               <Text>{desciption}</Text>
               <SubTitle>COMING SOON</SubTitle>
               <ArrowBox onClick={handleScrolling}>
                  <Arrow />
               </ArrowBox>
            </TextBox>
         ) : (
            <Box style={{ position: 'absolute' }}>
               <ArrowBox onClick={handleScrolling}>
                  <Arrow />
               </ArrowBox>
               <SubTitle>CRYPTOBTA IS COMING SOON</SubTitle>
               <Text>
                  El punto inicial de este proyecto es crear una página donde se
                  pueda ver los diferentes servicios que ofrecemos como marca
                  BTA “BUSINESS TARGET ANALYTIG”.
               </Text>
            </Box>
         )}
         <Particle />
      </Box>
   );
};

export default LandingPage;
