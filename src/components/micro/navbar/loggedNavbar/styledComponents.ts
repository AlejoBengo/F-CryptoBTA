/*IMPORT UTILITIES*/
import { styled } from '@mui/system';
import { Box, Avatar } from '@mui/material';

export const NavContainer = styled(Box)(
   ({ theme }) => `
 width: 90%;
 height: 100%;
display: flex;
justify-content: flex-end;
padding-right: 1rem;
padding-left: 1rem;

@media (max-width: 768px) {
  padding-right: 0rem;
}
`
);

export const Pic = styled(Avatar)(
   ({ theme }) => `
  width: 3.5rem;
  height: 3.5rem;
  background-color: yellow;
  cursor: pointer;
  color: black;
  
  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
    margin-top: 1rem;
 }
`
);
