import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
/*----------------------------------------------------------------------------*/

export const Container = styled(Box)`
   width: 100%;
   height: 88.5%;
   background-color: black;
   margin-top: 11.5vh;
   over-flow:hidden;
`;
export const SubContainer = styled(Box)`
display:flex;
   width: 80vw;
   height: 88.5vh;
   background-color: black;
   margin-top: 11.5vh;
`;
export const Datos = styled(Box)`
   width: 40%;
   height: auto;
   background-color: black;
   margin-top: 11.5vh;
   display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
`;

export const Text = styled(Typography)`
   color: white;
   font-size: 1.3rem;
   font-weight: bold;
`;

export const Text2 = styled(Typography)`
   color: white;
   font-size: 1.2rem;
   margin-left: 1rem;
`;
