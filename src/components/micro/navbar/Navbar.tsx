/*IMPORT UTILITIES*/
import React, { useState } from 'react';
import { useAppSelector } from '../../../globalStore/store/hooks';
import { useNavigate } from 'react-router-dom';
/*IMPORT CSS*/
import './navbar.css';
import BTALogo from '../../../imagenes/BTAName.jpg';
import { NavigationBar, NavContainer, Pic } from './styledComponents';
import { Menu, MenuItem } from '@mui/material';

const Navbar = () => {
   const navigate = useNavigate();
   const userInformation = useAppSelector((state) => state.UserSlice);

   const [space, setSpace] = useState<null | HTMLElement>(null);
   const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      setSpace(event.currentTarget);
   };

   return (
      <NavigationBar>
         <img onClick={() => navigate('/0')} src={BTALogo} alt='' />

         <NavContainer>
            <Pic onClick={handleClick}>{userInformation.name.charAt(0)}</Pic>
            <Menu
               anchorEl={space}
               open={Boolean(space)}
               onClose={() => setSpace(null)}
            >
               <MenuItem
                  onClick={() => {
                     setSpace(null);
                     navigate('/dashboard');
                  }}
               >
                  Dashboard
               </MenuItem>
               <MenuItem
                  onClick={() => {
                     setSpace(null);
                     navigate('/dashboard/profile');
                  }}
               >
                  Profile
               </MenuItem>
               {userInformation.role === 'administrator' && (
                  <MenuItem
                     onClick={() => {
                        setSpace(null);
                        navigate('/dashboard/newuser');
                     }}
                  >
                     Upload New Users
                  </MenuItem>
               )}
            </Menu>
         </NavContainer>
      </NavigationBar>
   );
};

export default Navbar;
