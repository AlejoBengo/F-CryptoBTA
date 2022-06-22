/*IMPORT UTILITIES*/
import { styled } from '@mui/system';
import { Box, Tab, Tabs } from '@mui/material';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

export const NavContainer = styled(Box)(
   ({ theme }) => `
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
`
);

export const FullTab = styled(Tab)(
   ({ theme }) => `
   width: 8rem;
   height: 2.5rem;
  background-color: #D8C945;
  color: black;
  border-bottom: 0.1rem solid #D8C945;
  transition: 0.4s;
  cursor: pointer;
  margin-left: 0.2rem

  &:hover {
    background-color: #EBDC53;
  }
`
);

export const PasTab = styled(Tab)(
   ({ theme }) => `
  width: 8rem;
  height: 2.5rem;
  background-color: transparent;
  color: #D8C945;
  border-bottom: 0.1rem solid #D8C945;
  cursor: pointer;
  margin-left: 0.2rem
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

export const SocialButton = styled('button')(
   ({ theme }) => `
   width: 8rem;
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

export const ButtonsBox = styled(Box)(
   ({ theme }) => `
 width: 17rem;
 height: 2.5rem;
 display: flex;
 justify-content: space-between;
 
 @media (max-width: 768px) {
  align-items: center;
  width: 100vw;
  padding-left: 1rem;
}
`
);

export const A = styled('a')(
   ({ theme }) => `
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`
);

export const Tablero = styled(Tabs)(
   ({ theme }) => `
  
  @media (max-width: 768px) {
    display: none;
 }
`
);

export const Dots = styled(DensityMediumIcon)(
   ({ theme }) => `
  display: none;
 
 @media (max-width: 768px) {
  display: block;
  color: #D8C945;
  font-size: 2rem;
}
`
);

export const LateralBox = styled(Box)(
   ({ theme }) => `
  width: 70vw;
  height: 100vh;
  border: none;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;

`
);

export const InsideButton = styled('button')(
   ({ theme }) => `
   width: 13rem;
   height: 3rem;
  background-color: transparent;
  color: #D8C945;
  border: 0.1rem solid #D8C945;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 1rem;
`
);
