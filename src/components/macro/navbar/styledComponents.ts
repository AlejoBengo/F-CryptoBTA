/*IMPORT UTILITIES*/
import { styled } from '@mui/system';
import { AppBar } from '@mui/material';

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