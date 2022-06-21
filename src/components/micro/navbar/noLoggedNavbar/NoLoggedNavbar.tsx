/*IMPORT UTILITIES*/
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
/*IMPORT CSS*/
import {
   AboutUs,
   NavContainer,
   ButtonsBox,
   FullTab,
   A,
   PasTab,
   SocialButton,
} from './styledComponents';
import { Menu, Tabs } from '@mui/material';
import './noLogged.css';
import Twitter from '../../../../imagenes/redes/Twitter.png';
import Youtube from '../../../../imagenes/redes/Youtube.png';
import Instagram from '../../../../imagenes/redes/Instagram.png';
import Telegram from '../../../../imagenes/redes/Telegram.png';

const NoLoggedNavbar = () => {
   const navigate = useNavigate();

   const [value, setValue] = useState(0);
   const [space, setSpace] = useState<null | HTMLElement>(null);

   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setSpace(event.currentTarget);
   };
   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
   };
   return (
      <NavContainer>
         <Menu
            anchorEl={space}
            open={Boolean(space)}
            onClose={() => setSpace(null)}
            PaperProps={{
               style: {
                  backgroundColor: 'transparent',
               },
            }}
         >
            <A href='https://twitter.com/academybta' target='_blank'>
               <img className='twitter' src={Twitter} alt='' />
            </A>
            <A
               href='https://www.youtube.com/c/businessTargetAnalytic'
               target='_blank'
            >
               <img className='youtube' src={Youtube} alt='' />
            </A>
            <A href='https://instagram.com/bta.community' target='_blank'>
               <img className='instagram' src={Instagram} alt='' />
            </A>
            <A href='https://t.me/Bta_chat' target='_blank'>
               <img className='telegram' src={Telegram} alt='' />
            </A>
         </Menu>
         <ButtonsBox>
            <SocialButton onClick={handleClick}>FOLLOW</SocialButton>
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
