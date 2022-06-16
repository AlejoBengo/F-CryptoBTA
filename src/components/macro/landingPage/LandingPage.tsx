/*IMPORT UTILITIES*/
import { Box } from '@mui/material';
/*IMPORT CSS*/
import {
   Title,
   SubTitle,
   TextBox,
   Arrow,
   ArrowBox,
   Text,
} from './styledComponents';
/*IMPORT DATA*/
import { desciption } from './text';

const LandingPage = () => {
   return (
      <TextBox>
         <Title>CRYPTOBTA</Title>
         <Title>BUSINESS TARGET ANALYTIC</Title>
         <Text>{desciption}</Text>
         <SubTitle>COMING SOON</SubTitle>
         <ArrowBox>
            <Arrow />
         </ArrowBox>
      </TextBox>
   );
};

export default LandingPage;
