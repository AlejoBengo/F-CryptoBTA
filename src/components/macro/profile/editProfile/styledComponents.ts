import { Box, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
/*----------------------------------------------------------------------------*/

export const SubContainer = styled(Box)`
   width: 100vw;
   min-height: 100vh;
   display: flex;
   justify-content: flex-end;
   align-items: flex-end;
`;
export const Form = styled(Box)`
   width: 40vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.9);
   padding: 2rem;
   padding-top: 6rem;

   @media (max-width: 768px) {
      padding-top: 8rem;
      width: 100vw;
      height: 100vh;
   }
`;

export const Input = styled(TextField)`
   font-size: 1.5rem;
   border: 0.1rem solid white;
   padding-left: 1rem;
`;

export const Title = styled(Typography)`
   color: white;
   font-size: 2rem;
   font-weight: bold;
   margin-left: 2rem;

   @media (max-width: 768px) {
      font-size: 1.6rem;
      margin-left: 1rem;
   }
`;
