/*IMPORT UTILITIES*/
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
/*IMPORT CSS*/
import {
   LoginButton,
   AboutUs,
   BackButtonBox,
   BackButton,
   NavContainer,
   ButtonsBox,
} from './styledComponents';

const NoLoggedNavbar = () => {
   const location = useLocation().pathname;
   const navigate = useNavigate();

   const handleGoToContact = () => {
      navigate('/3');
   };
   return (
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
   );
};

export default NoLoggedNavbar;
