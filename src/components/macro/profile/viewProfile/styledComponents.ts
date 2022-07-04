import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
/*----------------------------------------------------------------------------*/

export const SubContainer = styled(Box)`
   width: 100vw;
   min-height: 100vh;
   display: flex;
   background-color: rgba(0, 0, 0, 0.9);
`;

export const Form = styled(Box)`
   width: 25vw;
   height: 100vh;
   padding-top: 6rem;
   padding-left: 2rem;

   @media (max-width: 768px) {
      padding-top: 5rem;
      width: 100vw;
      height: 100vh;
   }
`;

export const EachTextBox = styled(Box)`
   display: flex;
   align-items: flex-end;
   margin-top: 2rem;

   @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
   }
`;
export const Title = styled(Typography)`
   color: white;
   font-size: 1.6rem;
   font-weight: bold;
   margin-left: 0.5rem;

   @media (max-width: 768px) {
      font-size: 1.6rem;
      margin-left: 1rem;
   }
`;

export const TextId = styled(Typography)`
   color: white;
   font-size: 1.2rem;
   width: 100%;
   display: flex;
   justify-content: flex-start;
   margin-left: -1.5rem;
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

export const EditButtonBox = styled(Box)`
   width: 100%;
   height: 5rem;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const EditButton = styled('button')`
   width: 8rem;
   height: 2rem;
   background-color: white;
   font-size: 1rem;
   color: black;
   border: none;
   cursor: pointer;
   transition: 0.3s;

   &:hover {
      width: 12rem;
   }
`;
