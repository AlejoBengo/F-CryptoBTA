/*IMPORT UTILITIES*/
import { useState } from 'react';
/*IMPORT COMPONENTS*/
import Particle from '../../../particles/Particle';
/*IMPORT CSS*/
import { Box } from '@mui/material';
import Youtube from '../../../imagenes/redes/Youtube.png';
import Facebook from '../../../imagenes/redes/Facebook.png';
import Twitter from '../../../imagenes/redes/Twitter.png';
import Twitch from '../../../imagenes/redes/Twitch.png';
import Instagram from '../../../imagenes/redes/Instagram.png';
import LinkedIn from '../../../imagenes/redes/LinkedIn.png';
import Spotify from '../../../imagenes/redes/Spotify.png';
import {
   TextBox,
   Title,
   Title2,
   Title3,
   Title4,
   SubTitle,
   Text2,
   ArrowDown,
   ArrowUp,
   ArrowRight,
   Text3,
   ContactInput,
   InputBox,
   SendButton,
   ContactInput2,
   ContactInputBox,
   SubsInput,
   SubscribeBox,
   ArrowBox,
   Form,
   ContactBox,
   Text,
} from './styledComponents';
import s from './landingPage.module.css';
/*IMPORT DATA*/
import { description, description2, contact } from './text';

const LandingPage = () => {
   const [view, setView] = useState<number>(0);

   const handleScrolling = (int: number) => {
      setView(int);
   };

   return (
      <Box>
         {view === 0 ? (
            <TextBox>
               <Title>BTA</Title>
               <Title3>PROTOCOL</Title3>
               <Title2>BUSINESS TARGET ANALYTIC</Title2>
               <Text>{description}</Text>
               <SubTitle>COMING SOON</SubTitle>
               <ArrowBox onClick={() => handleScrolling(1)}>
                  <ArrowDown />
               </ArrowBox>
            </TextBox>
         ) : view === 1 ? (
            <SubscribeBox>
               <ArrowBox onClick={() => handleScrolling(0)}>
                  <ArrowUp />
               </ArrowBox>
               <Title4>CRYPTOBTA IS COMING SOON</Title4>
               <Text2>{description2}</Text2>
               <Text style={{ marginTop: '-3rem' }}>
                  BUSINESS TARGET ANALYTIC
               </Text>
               <InputBox>
                  <SubsInput
                     placeholder='Enter your email to subscribe!'
                     autoComplete='false'
                  />
                  <SendButton>
                     <ArrowRight />
                  </SendButton>
               </InputBox>
               <ArrowBox onClick={() => handleScrolling(2)}>
                  <ArrowDown />
               </ArrowBox>
               <Box
                  style={{
                     width: '100%',
                     paddingLeft: '2rem',
                     height: '4rem',
                     display: 'flex',
                     alignItems: 'center',
                     zIndex: '2',
                  }}
               >
                  <img className={s.img} src={Youtube} alt='' />
                  <img className={s.img} src={Facebook} alt='' />
                  <img className={s.img} src={LinkedIn} alt='' />
                  <img className={s.img} src={Twitter} alt='' />
                  <img className={s.img} src={Twitch} alt='' />
                  <img className={s.img} src={Spotify} alt='' />
                  <img className={s.img} src={Instagram} alt='' />
               </Box>
            </SubscribeBox>
         ) : (
            <ContactBox>
               <ArrowBox onClick={() => handleScrolling(1)}>
                  <ArrowUp />
               </ArrowBox>
               <Form>
                  <Title2>CONTACT</Title2>
                  <Text3>{contact}</Text3>
                  <ContactInput autoComplete='false' placeholder='NAME' />
                  <ContactInput autoComplete='false' placeholder='EMAIL' />
                  <ContactInputBox>
                     <ContactInput2
                        autoComplete='false'
                        placeholder='MESSAGE'
                     />
                  </ContactInputBox>
                  <SendButton style={{ height: '2rem' }}>
                     <ArrowRight style={{ fontSize: '1rem' }} />
                  </SendButton>
               </Form>
            </ContactBox>
         )}
         <Particle />
      </Box>
   );
};

export default LandingPage;
