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
   padding-top: 4rem;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   @media (max-width: 768px) {
      padding-top: 8rem;
      width: 100vw;
      height: 100vh;
   }
`;

export const Label = styled('label')`
   font-size: 1.5rem;
   color: white;
   padding-left: 1rem;
   font-family: Helvetica;
`;

export const InputBox = styled(Box)`
   display: flex;
   flex-direction: column;
`;

export const Input = styled(TextField)`
   font-size: 1.5rem;
   border: 0.1rem solid white;
   padding-left: 1rem;

   input::-webkit-outer-spin-button,
   input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
   }
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
export const ButtonsBox = styled(Box)`
   width: 100%;
   display: flex;
   justify-content: center;
`;

export const SaveButton = styled('button')`
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
      backgroun-color: #cccccc;
   }
`;
