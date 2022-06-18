/*IMPORT UTILITIES*/
import { Link, useLocation } from 'react-router-dom';
/*IMPORT CSS*/
import { Box } from '@mui/material';
import {
   NavigationBar,
   LoginButton,
   AboutUs,
   BackButtonBox,
   ButtonsBox,
} from './styledComponents';

const Navbar = () => {
   const location = useLocation();
   return (
      <NavigationBar>
         <ButtonsBox>
            <BackButtonBox>
               {location.pathname === '/session' && (
                  <Link to='/'>
                     <LoginButton>BACK</LoginButton>
                  </Link>
               )}
               <a
                  href='https://cryptobta.com/wp-content/uploads/2022/03/Informacion-importante-para-el-usuario.pdf'
                  target='_blank'
               >
                  <AboutUs>ABOUT US</AboutUs>
               </a>
            </BackButtonBox>
            <Link to='session'>
               <LoginButton>ACCESS</LoginButton>
            </Link>
         </ButtonsBox>
      </NavigationBar>
   );
};

export default Navbar;
