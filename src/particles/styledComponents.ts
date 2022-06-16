import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
/*----------------------------------------------------------------------------*/

export const Container = styled(Box)`
   background-color: black;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100vw;
   height: 88.5vh;
`;

export const SubContainer = styled(Box)`
   width: 100vw;
   height: 100vh;
   background-color: black;
   display: flex;
   justify-content: center;
   align-items: center;
   opacity: 0.4;
`;
