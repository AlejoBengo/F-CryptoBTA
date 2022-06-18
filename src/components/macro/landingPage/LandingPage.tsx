/*IMPORT UTILITIES*/
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
   ImgBox,
   ArrowDown,
   ArrowUp,
   ArrowRight,
   Text3,
   ContactInput,
   InputBox,
   SendButton,
   ContactInput2,
   SocialMediaBox,
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
   const page = useParams();
   const [view, setView] = useState<number>(0);

   const handleScrolling = (int: number) => {
      setView(int);
   };

   useEffect(() => {
      setView(Number(page.page));
   }, []);

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
               <Title4>BTA PROTOCOL IS COMING SOON</Title4>
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
            </SubscribeBox>
         ) : view === 2 ? (
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
                  <SendButton
                     style={{
                        height: '2rem',
                        fontFamily: 'Helvetica',
                        fontWeight: 'bold',
                     }}
                  >
                     Send
                  </SendButton>
               </Form>

               <ArrowBox onClick={() => handleScrolling(3)}>
                  <ArrowDown />
               </ArrowBox>
            </ContactBox>
         ) : (
            <SocialMediaBox>
               <ArrowBox onClick={() => handleScrolling(2)}>
                  <ArrowUp />
               </ArrowBox>
               <Title2>FOLLOW US</Title2>
               <ImgBox>
                  <Box>
                     <a
                        href='https://www.youtube.com/c/businessTargetAnalytic'
                        target='_blank'
                     >
                        <img src={Youtube} alt='' className={s.img} />
                     </a>
                  </Box>
                  <img src={Facebook} alt='' className={s.img} />
                  <a href='https://twitter.com/academybta' target='_blank'>
                     <img src={Twitter} alt='' className={s.img} />
                  </a>
                  <img src={Twitch} alt='' className={s.img} />
                  <img src={Spotify} alt='' className={s.img} />
                  <a
                     href='https://www.instagram.com/crypto.bta/'
                     target='_blank'
                  >
                     <img src={Instagram} alt='' className={s.img} />
                  </a>
                  <img src={LinkedIn} alt='' className={s.img} />
               </ImgBox>
            </SocialMediaBox>
         )}
         <Particle />
      </Box>
   );
};

export default LandingPage;
