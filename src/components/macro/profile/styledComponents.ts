import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
/*----------------------------------------------------------------------------*/

export const Container = styled(Box)`
   width: 100vw;
   height: 88.5vh;
   background-color: black;
`;

export const FirstOutBox = styled(Box)`
   width: 100vw;
   height: 50%;
   display: flex;
`;

export const FirstInsideBox = styled(Box)`
   height: 100%;
   width: 50%;
`;

export const OtraCaja = styled(Box)`
   height: 50%;
   width: 100vw;
   display: flex;
   justify-content: space-around;
`;

export const SecondOutBox = styled(Box)`
   width: 100vw;
   height: 25%;
   display: flex;
`;

export const ThirdOuBox = styled(Box)`
   width: 100vw;
   height: 25%;
`;

export const TextBox = styled(Typography)`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const Text = styled(Typography)`
   font-size: 1rem;
   color: white;
`;

export const NewCaja = styled(Box)`
   height: 100%;
   width: 33.333%;
`;
