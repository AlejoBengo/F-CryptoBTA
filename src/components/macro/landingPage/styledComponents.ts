import { Box, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { styled } from '@mui/material/styles';
/*----------------------------------------------------------------------------*/

export const TextBox = styled(Box)`
   margin: 0;
   width: 100%;
   height: 88.5vh;
   position: absolute;
   opacity: 1;
   transition: 6s;
   z-index: 2;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
`;

export const Title = styled(Typography)`
   color: white;
   z-index: 2;
   font-size: 4rem;
   font-family: Helvetica;
   font-weight: 500;

   @media (max-width: 768px) {
      font-size: 2.5rem;
   }
`;

export const Title2 = styled(Typography)`
   color: white;
   z-index: 2;
   font-size: 3rem;
   font-family: Helvetica;
   font-weight: 500;

   @media (max-width: 768px) {
      font-size: 1.5rem;
   }
`;

export const Title3 = styled(Typography)`
   color: white;
   z-index: 2;
   font-size: 4rem;
   font-family: Helvetica;
   font-weight: 500;
   margin-top: -2.8rem;

   @media (max-width: 768px) {
      font-size: 2.5rem;
      margin-top: -1.5rem;
   }
`;

export const SubTitle = styled(Typography)`
   color: white;
   z-index: 2;
   font-size: 2rem;
   font-family: Helvetica;
   font-weight: 100;

   @media (max-width: 768px) {
      font-size: 1.8rem;
   }
`;

export const Text = styled(Typography)`
   color: white;
   z-index: 2;
   font-size: 1.3rem;
   font-family: Helvetica;
   text-align: center;
   text-justify: inter-word;
   padding: 1rem;

   @media (max-width: 768px) {
      text-align: justify;
      text-justify: inter-word;
   }
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
