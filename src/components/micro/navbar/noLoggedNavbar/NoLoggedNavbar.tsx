/*IMPORT UTILITIES*/
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
/*IMPORT CSS*/
import {
   AboutUs,
   NavContainer,
   ButtonsBox,
   FullTab,
   PasTab,
   SocialButton,
} from './styledComponents';
import { Tabs, Box } from '@mui/material';

const NoLoggedNavbar = () => {
   const navigate = useNavigate();
   const [value, setValue] = useState(0);

   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
   };
   return (
      <NavContainer>
         <ButtonsBox>
            <SocialButton>FOLLOW</SocialButton>
            <a
               href='https://cryptobta.com/wp-content/uploads/2022/03/Informacion-importante-para-el-usuario.pdf'
               target='_blank'
            >
               <AboutUs>ABOUT US</AboutUs>
            </a>
         </ButtonsBox>
         <Tabs value={value} onChange={handleChange}>
            {value === 0 ? (
               <FullTab label='BTA' onClick={() => navigate('/')} />
            ) : (
               <PasTab label='BTA' onClick={() => navigate('/')} />
            )}

            {value === 1 ? (
               <FullTab
                  label='DASHBOARD'
                  onClick={() => navigate('/dashboard')}
               />
            ) : (
               <PasTab
                  label='DASHBOARD'
                  onClick={() => navigate('/dashboard')}
               />
            )}
            {value === 2 ? (
               <FullTab label='CONTACT' onClick={() => navigate('/contact')} />
            ) : (
               <PasTab label='CONTACT' onClick={() => navigate('/contact')} />
            )}
            {value === 3 ? (
               <FullTab label='ACCESS' onClick={() => navigate('/session')} />
            ) : (
               <PasTab label='ACCESS' onClick={() => navigate('/session')} />
            )}
         </Tabs>
      </NavContainer>
   );
};

export default NoLoggedNavbar;
