/*IMPORT UTILITIES*/
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import BTAName from '../../../../imagenes/BTAName2.jpg';

export const Container = styled(Box)(
   ({ theme }) => `
   height: 88.5vh;
   position: relative;
   overflow: hidden;
   
   @media (max-width: 768px) {
      background-color: black;
      background-image: URL(${BTAName});
      background-size: contain;
      background-repeat: no-repeat;
      background-position-y: 120%;
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

    
   @media (max-width: 768px) {
      display: none;
   }
  `
);

export const RealContainer = styled(Box)(
   ({ theme }) => `
   background-color: transparent;
   position: absolute;
    width: 100vw;
    height: 88.5vh;
    display: flex;
    justify-content: space-evenly;
    padding-top: 10vh;
    
   @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      height: 60vh;
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
     margin-top: 10vh;
     
   @media (max-width: 768px) {
      margin-top: 0vh;
      width: 90%;
      height: 30%;
   }
    `
);

export const Title = styled(Typography)(
   ({ theme }) => `
  color: #D8C945;
  font-size: 2.5rem;
  font-weight: 400;

  @media (max-width: 768px) {
     display: none;
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
  height: 30%;
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
  
 @media (max-width: 768px) {
   width: 85%;
  }

  `
);
