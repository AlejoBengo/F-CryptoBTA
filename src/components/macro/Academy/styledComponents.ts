import { Box,Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
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
   color: #fff;
   display:inline;
   margin: 0px 0.4rem;
  
`;
export const TextBlue = styled(Typography)`
   align-self: center;
   align-content: center;
   font-weight: 900;
   font-size: large;
   color: #00c1cb;
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
   
`;
export const Buttom = styled(Box)`
cursor:pointer;
margin:10px 0px;
width: 100%;
   align-self: center;
   align-content: center;
   margin-left: 0rem;
   background-color: #00000000;
   boder: 0px solid transparent;
`;
export const A = styled('a')(
   ({ theme }) => `
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`
);