/*IMPORT UTILITIES*/
import { styled } from '@mui/system';
import { AppBar, Box, Avatar } from '@mui/material';

export const NavigationBar = styled(AppBar)(
   ({ theme }) => `
   max-height: 11.5vh;
   min-height: 11.5vh;
   width: 100vw;
   position: fixed;
   background-color: black;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
 `
);

export const NavContainer = styled(Box)(
   ({ theme }) => `
 width: 90%;
 height: 100%;
display: flex;
justify-content: flex-end;
padding-right: 1rem;
padding-left: 1rem;
`
);

export const Pic = styled(Avatar)(
   ({ theme }) => `
  width: 3.5rem;
  height: 3.5rem;
  background-color: yellow;
  cursor: pointer;
  color: black;
`
);
