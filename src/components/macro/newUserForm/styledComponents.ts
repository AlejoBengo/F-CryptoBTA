import { Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
/*----------------------------------------------------------------------------*/

export const Container = styled(Box)`
   background-color: black;
   width: 100vw;
   height: 88.5vh;
   display: flex;
   justify-content: space-around;
`;

export const InputBox = styled(Box)`
   display: flex;
   flex-direction: column;
   height: 88.5vh;
   width: 23%;
   justify-content: space-around;
`;

export const Input = styled(TextField)`
   font-size: 1.5rem;
   border: 0.1rem solid white;
   padding-left: 1rem;
`;
