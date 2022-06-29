import { Box,Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import bkg from './bkg.png';
/*----------------------------------------------------------------------------*/

export const Container = styled(Box)`
   width: 95%;
   min-height: 100%;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-content: flex-end;
   justify-content: center;
   align-items: baseline;
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
padding-top: 11.5vh;
   height: 100vh;
   width:100%;
   background-image: URL(${bkg});
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
   
`;

export const Input = styled('input')`
   margin:10px 0px;
   width: 100%;
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
   margin: 0px 0.4rem;
   
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