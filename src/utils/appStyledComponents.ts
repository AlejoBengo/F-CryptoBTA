import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
/*----------------------------------------------------------------------------*/

export const AppContainer = styled(Box)(
   ({ theme }) => `
   // min-height: 100vh;
   padding-top: 11.5vh;

   @media (max-width: 768px) {
    padding-top: 11.4vh;
    }
 `
);
