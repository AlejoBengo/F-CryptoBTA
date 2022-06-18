/*IMPORT UTILITIES*/
import { styled } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Typography } from '@mui/material';

export const Container = styled(Box)(
   ({ theme }) => `
   height: 88.5vh;
   position: relative;
   overflow: hidden;
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
      background-color: black;
   }
  `
);

export const Video2 = styled('video')(
   ({ theme }) => `
   display: none;
    
   @media (max-width: 768px) {
      display: flex;
      position: absolute;
      top: 0; 
      left: 0;
      width: 100%; 
      height: 100%;
      object-fit: cover;
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
     margin-top: 10vh;
     
   @media (max-width: 768px) {
      margin-top: 0vh;
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

export const MiniTextBox = styled(Box)(
   ({ theme }) => `
   display: flex;
   width: 100%;
   position: absolute;
   left: 0;
   bottom: 0;
   }}
 `
);

export const MiniText = styled(Typography)(
   ({ theme }) => `
  color: #D8C945;
  font-size: 1rem;
  font-weight: 400;
  margin-right: 0.5rem;
  margin-left: 0.5rem;

  @media (max-width: 768px) {
   font-size: 0.8rem;
  }
   `
);

export const ContactWord = styled(Typography)(
   ({ theme }) => `
  color: #D8C945;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;

  @media (max-width: 768px) {
   font-size: 0.8rem;
  }
   `
);
