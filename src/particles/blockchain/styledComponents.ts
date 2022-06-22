import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
/*----------------------------------------------------------------------------*/

export const Container = styled(Box)`
   background-color: black;
   width: 100vw;
   height: 100vh;
   position: absolute;
   z-index: -1;
   over-flow: hidden;
`;

export const SubContainer = styled(Box)`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: black;
   opacity: 0.8;
`;
