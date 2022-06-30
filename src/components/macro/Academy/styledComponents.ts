import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
<<<<<<< HEAD
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

   @media (max-width: 768px) {
      top: 0;
      width: 25rem;
      margin-left: -1rem;
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
      padding-top: 15vh;
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

export const Paragraph = styled(Box)`
   display: flex;
`;

export const WhiteText = styled(Typography)`
   font-size: 1.2vw;
   font-weight: bold;
=======
import bkg from './bkg.png';
import cursoGratis from './cursoGratis.png';
import uno from "./1.png";
import dos from "./BTARecurso 1.png";
/*----------------------------------------------------------------------------*/

export const Container = styled(Box)`
width: 100%;
height: 100%;
min-height: 100%;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-content: flex-end;
   justify-content: center;
   align-items: baseline;
   background-image: URL(${uno});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   boder:5px solid #000;
   `;
export const Paraph = styled(Box)`
display: flex;
width:auto;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
`;

export const ImgContainer = styled(Box)`
   height: 100vh;
   width:100%;
   background-image: URL(${dos});
   background-repeat: no-repeat;
   background-position: center;
   background-size: contain;
   display: flex;
    align-content: flex-end;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    `;

    export const SubContainer = styled(Box)`
    height: auto;
    width:90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: flex-start;
    align-items: center;
    background-color: #00000000;
   
`;

export const Input = styled('input')`
   margin:5px 0px;
   width: 100%;
   height: 50px;
   padding-text-left: 1rem;
   border: 0.1rem solid white;
   border-radius: 7% 7% 7% 7% / 50% 50% 50% 50%;
   padding-left: 0.5rem;
   align-self: center;
   align-content: center;
   font-weight: 900;
   font-size: large;
   background-color: #d9d9d9;
   color: #00c1cb;
   ::placeholder {
      color: #00c1cb;
      font-size: 1em;
   }
`;
export const TextWhite = styled(Typography)`

   font-weight: 900;
>>>>>>> 9d4210b1a2daf7a230ae1e84d84507494ba5bbeb
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
<<<<<<< HEAD
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
=======
   display:inline;
   margin: 0px ;
   
`;
export const TextBlueBtn = styled(Typography)`
   width: 100%;
   height: auto;
   border: 0.1rem solid white;
   background-color: #00000000;
   align-self: center;
   align-content: center;
   color: #00c1cb;
   display:inline;
   margin: 0px 0px 0px 0px;
   
>>>>>>> 9d4210b1a2daf7a230ae1e84d84507494ba5bbeb
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
   height: 2rem;
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
