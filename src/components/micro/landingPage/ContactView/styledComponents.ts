import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const Container = styled(Box)`
   width: 100vw;
   height: 88.5vh;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Form = styled(Box)`
   width: 32rem;
   height: 90%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   background-color: rgba(0, 0, 0, 0.5);

   @media (max-width: 768px) {
      width: 80%;
   }
`;

export const Title = styled(Typography)`
   color: white;
   z-index: 2;
   font-size: 4.5vw;
   font-weight: 500;

   @media (max-width: 768px) {
      font-size: 1.5rem;
   }
`;

export const Text = styled(Typography)`
   color: white;
   font-size: 1.1vw;
   padding: 1rem;
   text-align: center;
   text-justify: inter-word;

   @media (max-width: 768px) {
      font-size: 5vw;
   }
`;

export const ContactInput = styled('input')`
   width: 80%;
   height: 2.5rem;
   outline: none;
   background-color: transparent;
   font-size: 1.2vw;
   border: 0.15rem solid white;
   padding-left: 1rem;
   color: white;

   @media (max-width: 768px) {
      font-size: 5vw;
   }
`;

export const ContactInputBox = styled(Box)`
   width: 80%;
   height: 9rem;
   background-color: transparent;
   border: 0.15rem solid white;
   color: white;
   word-wrap: break-word;
`;

export const ContactInput2 = styled('textarea')`
   width: 100%;
   height: 100%;
   color: white;
   background-color: transparent;
   outline: none;
   border: none;
   resize: none;
   font-size: 1.2rem;
   padding-top: 0.4rem;
   padding-right: 0.4rem;
   padding-left: 1rem;
   word-break: break-word;

   @media (max-width: 768px) {
      font-size: 5vw;
   }

   &::-webkit-scrollbar {
      width: 0.5rem;
      background-color: black;
   }
   &::-webkit-scrollbar-thumb {
      background-color: white;
   }
`;

export const SendButton = styled(Box)`
   background-color: white;
   border: 0.1rem solid white;
   width: 20%;
   height: 2rem;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;

   @media (max-width: 768px) {
      width: 40%;
   }
`;

export const ArrowRight = styled(ArrowRightAltIcon)`
   color: black;
   font-size: 2vw;

   @media (max-width: 768px) {
      font-size: 8vw;
   }
`;
