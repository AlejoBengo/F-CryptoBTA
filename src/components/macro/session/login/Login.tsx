/*IMPORT UTILITIES*/
import Tilt from 'react-parallax-tilt';
import { useState } from 'react';
/*IMPORT CSS*/
import { Box } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import {
   Container,
   Video,
   Title,
   Input,
   InputBox,
   Filter,
   RealContainer,
   Form,
} from './styledComponents';
import BTACoin from '../../../../imagenes/BTACoin.png';
import VID from '../../../../imagenes/VelasJaponesas.mp4';
import './login.css';

const Login = () => {
   const [show, setShow] = useState<string>('password');

   const handleShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (show === 'password') {
         setShow('text');
      } else {
         setShow('password');
      }
   };

   return (
      <Container>
         <Video muted autoPlay loop>
            <source src={VID} type='video/mp4' />
         </Video>
         <Filter></Filter>
         <RealContainer>
            <Form>
               <Title>ACCESS TO BTA PROTOCOL</Title>
               <InputBox>
                  <Input autoComplete='off' placeholder='NAME' />
               </InputBox>
               <InputBox>
                  <Input
                     autoComplete='off'
                     placeholder='PASSWORD'
                     type={show}
                  />
                  <IconButton onClick={handleShowPassword}>
                     {show === 'password' ? (
                        <VisibilityOff style={{ color: 'white' }} />
                     ) : (
                        <Visibility style={{ color: 'white' }} />
                     )}
                  </IconButton>
               </InputBox>
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
         </RealContainer>
      </Container>
   );
};

export default Login;
