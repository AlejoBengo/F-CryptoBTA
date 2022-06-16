/*IMPORT UTILITIES*/
import { styled } from '@mui/system';
import { AppBar, Container, Box } from '@mui/material';

export const NavigationBar = styled(AppBar)(
   ({ theme }) => `
   max-height: 11.5vh;
   min-height: 11.5vh;
   position: fixed;
   background-color: black;
   display: flex;
   flex-direction: row-reverse;
   justify-content: space-between;
   align-items: center;
 `
);

export const ButtonsBox = styled(Box)(
   ({ theme }) => `
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding-left: 2rem;
  padding-right: 2rem;
`
);

export const LoginButton = styled('button')(
   ({ theme }) => `
  width: 5rem;
  height: 2.5rem;
  background-color: #D8C945;
  color: black;
  border-radius: 0.4rem;
  border: 0.1rem solid #D8C945;
  cursor: pointer;
`
);

export const AboutUs = styled('button')(
   ({ theme }) => `
  width: 8rem;
  height: 2.5rem;
  background-color: transparent;
  color: #D8C945;
  border: 0.1rem solid #D8C945;
  border-radius: 0.2rem;
  cursor: pointer;
`
);
