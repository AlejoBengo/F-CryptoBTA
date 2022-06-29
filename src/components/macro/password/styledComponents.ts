/*IMPORT UTILITIES*/
import { styled } from '@mui/system';
import { Box, Typography, TextField } from '@mui/material';

export const Container = styled(Box)(
   ({ theme }) => `
 width: 100vw;
 height: 100vh;
 padding-top: 11.5vh;
 background-color: black;
`
);

export const SubContainer = styled(Box)(
   ({ theme }) => `
width: 100vw;
height: 88.5vh;
display: flex;
`
);

export const TextBox = styled(Box)(
   ({ theme }) => `
width: 50vw;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding: 1rem;
background-color: black;
@media (max-width: 768px) {
   display: none;
}
`
);

export const FormBox = styled(Box)(
   ({ theme }) => `
width: 50vw;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 768px) {
width: 100vw;
}
`
);

export const Title = styled(Typography)(
   ({ theme }) => `
   font-size: 4.5vw;
   color: white;
   text-shadow: 0.2rem 0.2rem 0.1rem grey;
`
);

export const Form = styled(Box)(
   ({ theme }) => `
width: 30vw;
height: 90%;
background-color: rgba(250,250,250,0.1);
border-radius: 0.5rem;
display: flex;
padding: 1rem;
flex-direction: column;
justify-content: space-around;
align-items: center;

@media (max-width: 768px) {
   width: 85vw;
}
`
);

export const InputBox = styled(Box)(
   ({ theme }) => `
   width: 100%;
   display: flex;
   flex-direction: column;
`
);

export const Input = styled(TextField)(
   ({ theme }) => `
width: 100%;
color: white;
`
);

export const Label = styled('label')(
   ({ theme }) => `
   font-size: 2vw;
   color: white;
   font-family: Helvetica;
   padding-left: 0.5rem;
   @media (max-width: 768px) {
      font-size: 1.2rem;
   }
`
);

export const SaveButton = styled('button')(
   ({ theme }) => `
   width: 8rem;
   height: 2rem; 
   background-color: white;
   cursor: pointer;
   border: none;
   color: black;
   font-size: 1rem;
   transition: 0.5s;

   &:hover {
      background-color: #dadada;
   }
`
);

export const ErrorText = styled(Typography)(
   ({ theme }) => `
   font-size: 0.8rem;
   color: red;
`
);
