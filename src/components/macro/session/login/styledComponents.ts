/*IMPORT UTILITIES*/
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VelasImg from '../../../../imagenes/VelasIMG.jpg';

export const Container = styled(Box)(
   ({ theme }) => `
   height: 100vh;
   position: relative;
   overflow: hidden;
   margin-top: -11.5vh;
   background-color: black; 

   @media (max-width: 768px) {
      background-image: URL(${VelasImg});
      background-size: cover;
   }
 `
);

export const Video = styled('video')(
   ({ theme }) => `
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%;
    object-fit: cover;
    
   @media (max-width: 768px) {
      display: none;
   }
  `
);
export const Filter = styled(Box)(
   ({ theme }) => `
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    mix-blend-mode: overlay;
  `
);

export const RealContainer = styled(Box)(
   ({ theme }) => `
    position: absolute;  
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
   @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      height: 100%;
      padding-top: 1rem;
      justify-content: flex-start;
   }
   `
);

export const Form = styled(Box)(
   ({ theme }) => `
     background-color: rgba(0,0,0,0.8);
     border: 0.1rem solid #D8C945;
     width: 50vw;
     height: 35vh;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-around;
     border-radius: 0.5rem;
     
   @media (max-width: 768px) {
      margin-top: 11.5vh;
      width: 90%;
      height: 60%;
   }
    `
);

export const Title = styled(Typography)(
   ({ theme }) => `
  color: #D8C945;
  font-size: 3vw;
  font-weight: 400;

  @media (max-width: 768px) {
   text-align: center;
   text-justify: inter-word;
   font-size: 3.5rem;

  }
   `
);

export const InputBox = styled(Box)(
   ({ theme }) => `
  height: 18%;
 width: 60%;
 border: 0.1rem solid white;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding-right: 0.5rem;

 @media (max-width: 768px) {
  height: 3rem;
  width: 85%;
 }
 `
);

export const Input = styled('input')(
   ({ theme }) => `
  color: white;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  padding-left: 1rem;
  height: 100%;
  width: 90%;

 @media (max-width: 768px) {
   width: 85%;
  }
  `
);

export const LoginButton = styled(Box)(
   ({ theme }) => `
  height: 2rem;
 width: 6rem;
cursor: pointer;
 background-color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 `
);

export const ArrowRight = styled(ArrowForwardIcon)`
   color: black;
   font-size: 1.5rem;
`;
