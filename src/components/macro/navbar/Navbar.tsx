/*IMPORT UTILITIES*/
import { Link } from 'react-router-dom';
/*IMPORT CSS*/
import {
   NavigationBar,
   LoginButton,
   AboutUs,
   ButtonsBox,
} from './styledComponents';

const Navbar = () => {
   return (
      <NavigationBar>
         <ButtonsBox>
            <a
               href='https://cryptobta.com/wp-content/uploads/2022/03/Informacion-importante-para-el-usuario.pdf'
               target='_blank'
            >
               <AboutUs>ABOUT US</AboutUs>
            </a>
            <Link to='session'>
               <LoginButton>ACCESS</LoginButton>
            </Link>
         </ButtonsBox>
      </NavigationBar>
   );
};

export default Navbar;
