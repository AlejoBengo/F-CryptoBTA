import { Box, Typography, TextField } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { styled } from '@mui/material/styles';
/*----------------------------------------------------------------------------*/

export const TextBox = styled(Box)`
   margin: 0;
   width: 100%;
   height: 88.5vh;
   position: absolute;
   opacity: 1;
   z-index: 2;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
`;

export const Title = styled(Typography)`
   color: white;
   z-index: 2;
   font-size: 4rem;
   font-family: Helvetica;
   font-weight: 500;

   @media (max-width: 768px) {
      font-size: 2.5rem;
   }
`;

export const Title2 = styled(Typography)`
   color: white;
   z-index: 2;
   font-size: 3rem;
   font-family: Helvetica;
   font-weight: 500;

   @media (max-width: 768px) {
      font-size: 1.5rem;
   }
`;

export const Title3 = styled(Typography)`
   color: white;
   z-index: 2;
   font-size: 4rem;
   font-family: Helvetica;
   font-weight: 500;
   margin-top: -2.8rem;

   @media (max-width: 768px) {
      font-size: 2.5rem;
      margin-top: -1.5rem;
   }
`;

export const SubTitle = styled(Typography)`
   color: white;
   z-index: 2;
   font-size: 2rem;
   font-family: Helvetica;
   font-weight: 100;

   @media (max-width: 768px) {
      font-size: 1.8rem;
   }
`;

export const Text = styled(Typography)`
   color: white;
   z-index: 2;
   font-size: 1.3rem;
   font-family: Helvetica;
   text-align: center;
   text-justify: inter-word;
   padding: 1rem;

   @media (max-width: 768px) {
      text-align: justify;
      text-justify: inter-word;
   }
`;

export const ArrowBox = styled(Box)`
   width: 5rem;
   height: 5rem;
   border: 0.1rem solid white;
   display: flex;
   cursor: pointer;
   z-index: 2;
   justify-content: center;
   align-items: center;
`;

export const ArrowDown = styled(ArrowDownwardIcon)`
   color: white;
   font-size: 2rem;
   z-index: 2;
`;

export const ArrowUp = styled(ArrowUpwardIcon)`
   color: white;
   font-size: 2rem;
   z-index: 2;
`;

export const ArrowRight = styled(ArrowForwardIcon)`
   color: black;
   font-size: 1.5rem;
   z-index: 2;
`;

export const SubscribeBox = styled(Box)`
   margin: 0;
   width: 100%;
   height: 88.5vh;
   display: flex;
   flex-direction: column;
   position: absolute;
   align-items: center;
   justify-content: space-evenly;
`;

export const Title4 = styled(Typography)`
   color: white;
   z-index: 2;
   font-size: 5.9vw;
   font-family: Helvetica;
   font-weight: 500;

   @media (max-width: 768px) {
      font-size: 3rem;
      margin-left: 5%;
   }
`;

export const Text2 = styled(Typography)`
   color: white;
   z-index: 2;
   font-size: 1.3rem;
   font-family: Helvetica;
   padding: 1rem;
   text-align: center;
   text-justify: inter-word;
`;

export const InputBox = styled(Box)`
   display: flex;
   width: 45%;
   z-index: 2;
   height: 3rem;

   @media (max-width: 768px) {
      width: 90%;
   }
`;

export const SendButton = styled(Box)`
   background-color: white;
   border: 0.1rem solid white;
   width: 20%;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const SubsInput = styled('input')`
   width: 80%;
   color: white;
   outline: none;
   font-size: 1.4rem;
   font-weight: 400;
   padding: 0.4rem;
   border: none;
   border: 0.1rem solid white;
   background-color: transparent;

   @media (max-width: 768px) {
      font-size: 1.1rem;
      padding: 0.7rem;
   }
`;

export const ContactBox = styled(Box)`
   background-color: rgb(0, 0, 0, 0.7);
   width: 100%;
   margin: 0;
   height: 88.5vh;
   position: absolute;
   z-index: 2;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
`;

export const Form = styled(Box)`
   width: 32rem;
   height: 65vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;

   @media (max-width: 768px) {
      width: 80%;
   }
`;

export const Text3 = styled(Typography)`
   color: white;
   z-index: 2;
   font-size: 0.9rem;
   font-family: Helvetica;
   padding: 1rem;
   text-align: center;
   text-justify: inter-word;
`;

export const ContactInput = styled('input')`
   width: 80%;
   height: 2.5rem;
   background-color: transparent;
   font-size: 1.2rem;
   border: 0.15rem solid grey;
   padding-left: 1rem;
   color: white;
   display: flex;
   align-items: flex-start;
`;

export const ContactInputBox = styled(Box)`
   width: 80%;
   height: 9rem;
   background-color: transparent;
   border: 0.15rem solid grey;
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
   font-family: Helvetica;
   padding-top: 0.4rem;
   padding-right: 0.4rem;
   padding-left: 1rem;
   word-break: break-word;

   &::-webkit-scrollbar {
      width: 0.5rem;
      background-color: black;
   }
   &::-webkit-scrollbar-thumb {
      background-color: white;
   }
`;

export const ImgBox = styled(Box)`
   display: flex;
   justify-content: space-around;
   align-items: center;
   height: 17rem;
   width: 100vw;

   @media (max-width: 768px) {
      flex-wrap: wrap;
   }
`;

export const SocialMediaBox = styled(Box)`
   display: flex;
   align-items: center;
   width: 100vw;
   height: 88.5vh;
   z-index: 2;
   flex-direction: column;
   position: absolute;
`;
