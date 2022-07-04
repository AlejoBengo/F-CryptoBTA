import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// import bkg from './bkg.png';
/*----------------------------------------------------------------------------*/

export const Container = styled(Box)`
   height: 100vh;
   position: relative;
   overflow: hidden;
   margin-top: -11.5vh;
`;

export const ImgPerfil = styled('img')`
   position: absolute;
   width: 30rem;
   bottom: -1rem;
   margin-left: 0rem;

   @media (max-width: 768px) {
      width: 100%;
      bottom: 22vh;
   }
`;

export const FreeText = styled(Typography)`
   position: absolute;
   right: 3rem;
   top: 3rem;
   font-size: 6rem;
   color: #00c2cb;
   -webkit-text-stroke: 0.1rem #03989e;
   font-weight: bold;
   letter-spacing: 0.1rem;
   text-shadow: 0 0 0.25rem #00c2cb, 0 0 0.5rem #00c2cb, 0 0 0.75rem #00c2cb,
      0 0 1rem #00c2cb, 0 0 1.25rem #00c2cb;
   transform: rotate(25deg);

   @media (max-width: 768px) {
      font-size: 3rem;
   }
`;

export const SubContainer = styled(Box)`
   width: 35vw;
   height: 70vh;
   margin-left: 40vw;
   margin-top: 20vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: rgba(0, 193, 203, 0.08);
   padding: 0.5rem;
   border-radius: 0.5rem;

   @media (max-width: 768px) {
      position: absolute;
      width: 100vw;
      height: 100vh;
      margin-left: 0vw;
      justify-content: space-around;
      margin-top: 0vh;
      padding-top: 10vh;
      padding-bottom: 5vh;
      background-color: rgba(0, 0, 0, 0);
   }
`;

export const ImgContainer = styled(Box)`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-around;

   @media (max-width: 768px) {
      width: 100vw;
   }
`;

export const WhiteText = styled(Typography)`
   font-size: 1.2vw;
   font-weight: bold;
   color: #fff;
   margin-right: 0.4rem;

   @media (max-width: 768px) {
      font-size: 1.3rem;
   }
`;

export const BlueText = styled(Typography)`
   font-size: 1.2vw;
   font-weight: bold;
   color: #00c1cb;
   margin-right: 0.4rem;

   @media (max-width: 768px) {
      font-size: 1.3rem;
   }
`;

export const ListBox = styled(Box)`
   width: 100%;
`;

export const LiBox = styled(Box)`
   display: flex;
`;

export const Li = styled('li')`
   color: white;
   font-size: 1.2rem;
   margin-bottom: 0.2rem;
`;

export const FormBox = styled(Box)`
   width: 100%;
   height: 23vh;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
`;

export const Input = styled('input')`
   width: 85%;
   min-height: 2.8rem;
   border-radius: 0.5rem;
   border: none;
   outline: none;
   padding-left: 0.5rem;
   color: #000;
   font-size: 1rem;
   background-color: #cecece;
   ::placeholder {
      color: #000;
   }
`;

export const ImgButton = styled('img')`
   width: 20vw;

   @media (max-width: 768px) {
      width: 68vw;
   }
`;
