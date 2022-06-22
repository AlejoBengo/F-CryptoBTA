import { Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
/*----------------------------------------------------------------------------*/

export const Container = styled(Box)`
   background-color: black;
   width: 100vw;
   height: 88.5vh;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   margin-top: 11.5vh;
   over-flow: hidden;
`;

export const InputBox = styled(Box)`
   width: 100vw;
   height: 23%;
   display: flex;
   justify-content: space-around;
   align-items: center;
`;

export const Input = styled(TextField)`
   font-size: 1.5rem;
   width: 20rem;
   padding-text-left: 1rem;
   border: 0.1rem solid white;
   padding-left: 0.5rem;
`;

export const OptionsBox = styled(Box)`
   width: 100vw;
   height: 8%;
   display: flex;
   justify-content: space-between;
   padding-right: 0.5rem;
   padding-left: 0.5rem;
   align-items: center;
`;

export const SwitchBox = styled(Box)`
   display: flex;
   justify-content: center;
   align-items: center;
   border: 0.1rem solid white;
   width: 20rem;
`;

export const Label = styled('label')`
   color: white;
   font-size: 1.2vw;
   font-family: Helvetica;
`;

export const SwitchBox2 = styled(Box)`
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 20rem;
   height: 100%;
   over-flow: hidden;
   padding-bottom: 0.4rem;
`;
