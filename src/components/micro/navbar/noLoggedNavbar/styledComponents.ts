/*IMPORT UTILITIES*/
import { styled } from '@mui/system';
import { AppBar, Box } from '@mui/material';

export const NavContainer = styled(Box)(
   ({ theme }) => `
  width: 82%;
  height: 100%;
 display: flex;
 justify-content: space-between;
`
);

export const NavigationBar = styled(AppBar)(
   ({ theme }) => `
   max-height: 11.5vh;
   min-height: 11.5vh;
   position: fixed;
   background-color: transparent;
   display: flex;
   flex-direction: row;
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

export const BackButtonBox = styled(Box)(
   ({ theme }) => `
   width: 25%;
   display: flex;
 justify-content: space-between;

 @media (max-width: 768px) {
   width: 67%;
 }
`
);

export const LoginButton = styled('button')(
   ({ theme }) => `
  width: 5rem;
  height: 2.5rem;
  background-color: #D8C945;
  color: black;
  border: 0.1rem solid #D8C945;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #EBDC53;
  }
`
);

export const BackButton = styled('button')(
   ({ theme }) => `
  width: 5rem;
  height: 2.5rem;
  background-color: #D8C945;
  color: black;
  border: 0.1rem solid #D8C945;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #EBDC53;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
);

export const AboutUs = styled('button')(
   ({ theme }) => `
  width: 8rem;
  height: 2.5rem;
  background-color: transparent;
  color: #D8C945;
  border: 0.1rem solid #D8C945;
  cursor: pointer;
`
);
