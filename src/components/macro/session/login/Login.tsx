/*IMPORT UTILITIES*/
import Tilt from 'react-parallax-tilt';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../globalStore/store/hooks';
import { setUserData } from '../../../../globalStore/reducers/UserSlice/UserSlice';
import { useCookies } from 'react-cookie';
import { fetchUserForLogin } from '../../../../globalStore/reducers/UserSlice/NoiseActions';
/*IMPORT CSS*/
import {
   Box,
   IconButton,
   Backdrop,
   CircularProgress,
   Snackbar,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
   Container,
   Video,
   Title,
   Input,
   InputBox,
   Filter,
   LoginButton,
   RealContainer,
   ArrowRight,
   Form,
} from './styledComponents';
import BTACoin from '../../../../imagenes/BTACoin.png';
import VID from '../../../../imagenes/VelasJaponesas.mp4';
import './login.css';
/*IMPORT DATA*/
import { UserDataForLogin } from '../../../../globalStore/reducers/UserSlice/utilities';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
   props,
   ref
) {
   return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Login = () => {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const [cookie, setCookie] = useCookies();

   const [charge, setCharge] = useState<boolean>(false);
   const [errorAlert, setErrorAlert] = useState<boolean>(false);
   const [errorAlert2, setErrorAlert2] = useState<boolean>(false);
   const [errorAlert3, setErrorAlert3] = useState<boolean>(false);
   const [successAlert, setSuccessAlert] = useState<boolean>(false);
   const [showPassword, setShowPassword] = useState<string>('password');
   const [userDataForLogin, setUserDatatForLogin] = useState<UserDataForLogin>({
      email: '',
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
   const handleSubmit = (event: React.MouseEvent<HTMLDivElement>) => {
      setCharge(true);
      if (userDataForLogin.email.length && userDataForLogin.password.length) {
         fetchUserForLogin(userDataForLogin)
            .then((ans) => {
               if (ans) {
                  setSuccessAlert(true);
                  dispatch(setUserData(ans));
                  setCookie('userInformation', ans, {
                     path: '/',
                     expires: new Date('December 31, 2022'),
                  });
                  setTimeout(() => {
                     setCharge(false);
                     setSuccessAlert(false);
                     navigate('/user/profile');
                  }, 3000);
               } else {
                  setErrorAlert2(true);
                  setTimeout(() => {
                     setCharge(false);
                     setErrorAlert2(false);
                  }, 3000);
               }
            })
            .catch((err) => {
               setErrorAlert3(true);
               setTimeout(() => {
                  setCharge(false);
                  setErrorAlert3(false);
               }, 3000);
            });
      } else {
         setErrorAlert(true);
         setCharge(false);
         setTimeout(() => {
            setErrorAlert(false);
         }, 3000);
      }
   };

   return (
      <Container>
         <Snackbar open={errorAlert} autoHideDuration={6000}>
            <Alert severity='error' sx={{ width: '100%' }}>
               Please, complete the fields.
            </Alert>
         </Snackbar>
         <Snackbar open={errorAlert2} autoHideDuration={6000}>
            <Alert severity='error' sx={{ width: '100%' }}>
               The email or password do not coincide with any user.
            </Alert>
         </Snackbar>
         <Snackbar open={errorAlert3} autoHideDuration={6000}>
            <Alert severity='error' sx={{ width: '100%' }}>
               Something went wrong. Please try again later.
            </Alert>
         </Snackbar>
         <Snackbar open={successAlert} autoHideDuration={6000}>
            <Alert severity='success' sx={{ width: '100%' }}>
               Welcome back!
            </Alert>
         </Snackbar>
         <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={charge}
         >
            <CircularProgress color='warning' size={100} />
         </Backdrop>
         <Video muted autoPlay loop>
            <source src={VID} type='video/mp4' />
         </Video>
         <Filter></Filter>
         <RealContainer>
            <Form>
               <Title>LOGIN TO BTA PROTOCOL</Title>
               <InputBox>
                  <Input
                     autoComplete='off'
                     placeholder='EMAIL'
                     name='email'
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
               <LoginButton onClick={handleSubmit}>
                  <ArrowRight />
               </LoginButton>
            </Form>
            {BTACoin && (
               <Box>
                  <Tilt
                     tiltReverse={true}
                     perspective={600}
                     trackOnWindow={true}
                     gyroscope={true}
                  >
                     <img className='img1' src={BTACoin} alt='' />
                  </Tilt>
               </Box>
            )}
         </RealContainer>
      </Container>
   );
};

export default Login;
