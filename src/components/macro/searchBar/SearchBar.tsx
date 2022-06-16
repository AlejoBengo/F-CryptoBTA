import { Box } from '@mui/material';
import {
   NavigationBar,
   LoginButton,
   AboutUs,
   ButtonsBox,
} from './styledComponents';

const SearchBar = () => {
   return (
      <NavigationBar>
         <ButtonsBox>
            <a
               href='https://cryptobta.com/wp-content/uploads/2022/03/Informacion-importante-para-el-usuario.pdf'
               target='_blank'
            >
               <AboutUs>ABOUT US</AboutUs>
            </a>
            <LoginButton>ACCESS</LoginButton>
         </ButtonsBox>
      </NavigationBar>
   );
};

export default SearchBar;
