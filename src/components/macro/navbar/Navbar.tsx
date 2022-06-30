/*IMPORT UTILITIES*/
import { useNavigate, useLocation } from 'react-router-dom';
/*IMPORT COMPONENTS*/
import NoLoggedNavbar from '../../micro/navbar/noLoggedNavbar/NoLoggedNavbar';
import LoggedNavbar from '../../micro/navbar/loggedNavbar/LoggedNavbar';
/*IMPORT CSS*/
import { NavigationBar, NavContainer2 } from './styledComponents';
import BTALogo from '../../../imagenes/BTAName.png';
import './navbar.css';

const Navbar = () => {
   const navigate = useNavigate();
   const location = useLocation().pathname;

   if (location === '/academy') {
      return null;
   } else {
      return (
         <NavigationBar>
            <img
               onClick={() => navigate('/')}
               src={BTALogo}
               alt=''
               className='img'
            />
            {location === '/' ||
            location === '/dashboard' ||
            location === '/session' ||
            location === '/contact' ? (
               <NoLoggedNavbar />
            ) : (
               <LoggedNavbar />
            )}
         </NavigationBar>
      );
   }
};

export default Navbar;
