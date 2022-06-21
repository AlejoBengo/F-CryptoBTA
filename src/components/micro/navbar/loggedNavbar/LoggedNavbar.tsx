/*IMPORT UTILITIES*/
import React, { useState } from 'react';
import { useAppSelector } from '../../../../globalStore/store/hooks';
import { useNavigate } from 'react-router-dom';
/*IMPORT CSS*/
import './navbar.css';
import { NavContainer, Pic } from './styledComponents';
import { Menu, MenuItem } from '@mui/material';

const LoggedNavbar = () => {
   const navigate = useNavigate();
   const userInformation = useAppSelector((state) => state.UserSlice);

   const [space, setSpace] = useState<null | HTMLElement>(null);
   const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      setSpace(event.currentTarget);
   };

   return (
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
                  navigate('/user/profile');
               }}
            >
               Profile
            </MenuItem>
            {userInformation.role === 'administrator' && (
               <MenuItem
                  onClick={() => {
                     setSpace(null);
                     navigate('/user/newuser');
                  }}
               >
                  Upload New Users
               </MenuItem>
            )}
         </Menu>
      </NavContainer>
   );
};

export default LoggedNavbar;
