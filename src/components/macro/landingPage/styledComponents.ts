import { Box, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { styled } from '@mui/material/styles';
/*----------------------------------------------------------------------------*/

export const Title = styled(Typography)`
   color: white;
   z-index: 2;
   font-size: 5rem;
   font-family: Helvetica;
   font-weight: 500;
`;

export const Text = styled(Typography)`
   color: white;
   z-index: 2;
   font-size: 1.3rem;
   font-family: Helvetica;
   text-align: center;
   text-justify: inter-word;
   padding: 1rem;
`;

export const TextBox = styled(Box)`
   margin-top: 5rem;
   width: 100%;
   position: absolute;
   opacity: 1;
   z-index: 2;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
`;

export const SubTitle = styled(Typography)`
   color: white;
   z-index: 2;
   font-size: 3rem;
   font-family: Helvetica;
   font-weight: 300;
`;

export const ArrowBox = styled(Box)`
   width: 5rem;
   height: 5rem;
   border: 0.1rem solid white;
   display: flex;
   cursor: pointer;
   justify-content: center;
   align-items: center;
`;

export const Arrow = styled(ArrowDownwardIcon)`
   color: white;
   font-size: 2rem;
`;
