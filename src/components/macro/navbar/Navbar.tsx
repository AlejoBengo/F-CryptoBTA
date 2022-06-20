/*IMPORT UTILITIES*/
import { useNavigate, useLocation } from 'react-router-dom';
import NoLoggedNavbar from '../../micro/navbar/noLoggedNavbar/NoLoggedNavbar';
/*IMPORT CSS*/
import { NavigationBar } from './styledComponents';
import BTALogo from '../../../imagenes/BTAName.png';
import './navbar.css';

const Navbar = () => {
   const navigate = useNavigate();
   const location = useLocation().pathname;

   return (
      <NavigationBar>
         <img
            onClick={() => navigate('/0')}
            src={BTALogo}
            alt=''
            className='img'
         />
         {(location === '/' ||
            location === '/session' ||
            location === '/contact') && <NoLoggedNavbar />}
      </NavigationBar>
   );
};

export default Navbar;
