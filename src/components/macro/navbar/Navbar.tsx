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
               rel="noreferrer"
            >
               <AboutUs>ABOUT US</AboutUs>
            </a>
            <LoginButton>ACCESS</LoginButton>
         </ButtonsBox>
      </NavigationBar>
   );
};

export default Navbar;
