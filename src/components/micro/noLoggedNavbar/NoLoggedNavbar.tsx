/*IMPORT UTILITIES*/
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
/*IMPORT CSS*/
import BTALogo from '../../../imagenes/BTAName.jpg';
import {
   NavigationBar,
   LoginButton,
   AboutUs,
   BackButtonBox,
   BackButton,
   NavContainer,
   ButtonsBox,
} from './styledComponents';
import './navbar.css';

const NoLoggedNavbar = () => {
   const location = useLocation().pathname;
   const navigate = useNavigate();

   const handleGoToContact = () => {
      navigate('/3');
   };
   return (
      <NavigationBar>
         <img
            onClick={() => navigate('/0')}
            src={BTALogo}
            alt=''
            className='img'
         />
         <NavContainer>
            <ButtonsBox>
               <BackButtonBox>
                  {location === '/session' && (
                     <Link to='/'>
                        <BackButton>BACK</BackButton>
                     </Link>
                  )}
                  <a
                     href='https://cryptobta.com/wp-content/uploads/2022/03/Informacion-importante-para-el-usuario.pdf'
                     target='_blank'
                  >
                     <AboutUs>ABOUT US</AboutUs>
                  </a>
               </BackButtonBox>
               <BackButtonBox>
                  <AboutUs onClick={handleGoToContact}>CONTACT</AboutUs>
                  <Link to='session'>
                     <LoginButton>ACCESS</LoginButton>
                  </Link>
               </BackButtonBox>
            </ButtonsBox>
         </NavContainer>
      </NavigationBar>
   );
};

export default NoLoggedNavbar;
