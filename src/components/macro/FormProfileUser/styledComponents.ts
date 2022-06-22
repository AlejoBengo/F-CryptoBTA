import { Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
/*----------------------------------------------------------------------------*/

export const ContainerEdit = styled(Box)`
   background-color: black;
   width: 100vw;
   height: 88.5vh;
   display: flex;
   ustify-content: space-around;
   flex-direction: row;
   flex-wrap: wrap;
   align-content: center;
   align-items: center;
   gap: 15px;
`;

export const Input = styled(TextField)`
   font-size: 1.5rem;
   border: 0.1rem solid white;
   padding-left: 1rem;
`;
