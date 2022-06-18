/*IMPORT UTILITIES*/
import Tilt from 'react-parallax-tilt';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
/*IMPORT CSS*/
import { Box } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import {
   Container,
   Video,
   Video2,
   MiniText,
   Title,
   Input,
   InputBox,
   Filter,
   LoginButton,
   MiniTextBox,
   RealContainer,
   ContactWord,
   ArrowRight,
   Form,
} from './styledComponents';
import BTACoin from '../../../../imagenes/BTACoin.png';
import VID from '../../../../imagenes/VelasJaponesas.mp4';
import VID2 from '../../../../imagenes/VelasVertical.mp4';
import './login.css';
/*IMPORT DATA*/
import { UserDataForLogin } from '../../../../globalStore/reducers/UserSlice/utilities';

const Login = () => {
   const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState<string>('password');
   const [userDataForLogin, setUserDatatForLogin] = useState<UserDataForLogin>({
      name: '',
      password: '',
   });

   const handleShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (showPassword === 'password') {
         setShowPassword('text');
      } else {
         setShowPassword('password');
      }
   };
   const handleInputData = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setUserDatatForLogin({
         ...userDataForLogin,
         [event.target.name]: event.target.value,
      });
   };
   const handleGoToContact = () => {
      navigate('/2');
   };

   return (
      <Container>
         <Video muted autoPlay loop>
            <source src={VID} type='video/mp4' />
         </Video>
         <Video2 muted autoPlay loop>
            <source src={VID2} type='video/mp4' />
         </Video2>
         <Filter></Filter>
         <RealContainer>
            <Form>
               <Title>LOGIN TO BTA PROTOCOL</Title>
               <InputBox>
                  <Input
                     autoComplete='off'
                     placeholder='NAME'
                     name='name'
                     onChange={handleInputData}
                  />
               </InputBox>
               <InputBox>
                  <Input
                     autoComplete='off'
                     name='password'
                     onChange={handleInputData}
                     placeholder='PASSWORD'
                     type={showPassword}
                  />
                  <IconButton onClick={handleShowPassword}>
                     {showPassword === 'password' ? (
                        <VisibilityOff style={{ color: 'white' }} />
                     ) : (
                        <Visibility style={{ color: 'white' }} />
                     )}
                  </IconButton>
               </InputBox>
               <LoginButton>
                  <ArrowRight />
               </LoginButton>
            </Form>
            <Box>
               <Tilt
                  tiltReverse={true}
                  perspective={600}
                  trackOnWindow={true}
                  gyroscope={true}
               >
                  <img className='img' src={BTACoin} alt='' />
               </Tilt>
            </Box>
            <MiniTextBox>
               <MiniText>If you ain't have your account yet, </MiniText>
               <ContactWord onClick={handleGoToContact}>contact </ContactWord>
               <MiniText>with the BTA team.</MiniText>
            </MiniTextBox>
         </RealContainer>
      </Container>
   );
};

export default Login;
