/*IMPORT UTILITIES*/
import React, { useState } from 'react';
import { changePassword } from '../../../globalStore/reducers/UserSlice/NoiseActions';
import { setUserData } from '../../../globalStore/reducers/UserSlice/UserSlice';
import { useAppDispatch } from '../../../globalStore/store/hooks';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
/*IMPORT CSS*/
import { Backdrop, CircularProgress, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import {
   Container,
   SubContainer,
   Title,
   TextBox,
   FormBox,
   Form,
   Input,
   ErrorText,
   SaveButton,
   Label,
   InputBox,
} from './styledComponents';
/*IMPORT DATA*/
import { config, validator } from './utilities';
import { ChangePasswordData } from '../../../globalStore/reducers/UserSlice/utilities';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
   props,
   ref
) {
   return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Password = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const [cookies, setCookie, removeCookie] = useCookies();

   const [form, setForm] = useState<ChangePasswordData>({
      email: '',
      current_password: '',
      new_password: '',
      confirm_password: '',
   });
   const [errors, setErrors] = useState({
      a: '',
      b: '',
      c: '',
   });
   const [aux, setAux] = useState<boolean>(false);
   const [charge, setCharge] = useState<boolean>(false);
   const [successAlert, setSuccessAlert] = useState<boolean>(false);
   const [errorAlert, setErrorAlert] = useState<boolean>(false);

   const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setForm({ ...form, [event.target.name]: event.target.value });
      setErrors(
         validator({ ...form, [event.target.name]: event.target.value })
      );
   };

   const handleSubmit = () => {
      setCharge(true);
      if (!aux) {
         setAux(true);
      }
      if (!errors.a.length && !errors.b.length && !errors.c.length) {
         changePassword(form)
            .then((ans) => {
               if (ans) {
                  setSuccessAlert(true);
                  setTimeout(() => {
                     dispatch(setUserData(ans));
                     removeCookie('userInformation', { path: '/' });
                     setCookie('userInformation', ans, {
                        path: '/',
                        maxAge: 3600,
                     });
                     setSuccessAlert(false);
                     setCharge(false);
                     navigate('/user/profile');
                  }, 3000);
               } else {
                  setErrorAlert(true);
                  setTimeout(() => {
                     setErrorAlert(false);
                     setCharge(false);
                  }, 3000);
               }
            })
            .catch(() => {
               setErrorAlert(true);
               setTimeout(() => {
                  setErrorAlert(false);
                  setCharge(false);
               }, 3000);
            });
      } else {
         setErrorAlert(true);
         setTimeout(() => {
            setErrorAlert(false);
            setCharge(false);
         }, 3000);
      }
   };

   return (
      <Container>
         <Snackbar open={errorAlert} autoHideDuration={6000}>
            <Alert severity='error' sx={{ width: '100%' }}>
               Something went wrong. Please try again later.
            </Alert>
         </Snackbar>
         <Snackbar open={successAlert} autoHideDuration={6000}>
            <Alert severity='success' sx={{ width: '100%' }}>
               Password edited.
            </Alert>
         </Snackbar>
         <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={charge}
         >
            <CircularProgress color='warning' size={100} />
         </Backdrop>
         <SubContainer>
            <TextBox>
               <Title>Confirm your identity</Title>
               <Title>Change your password</Title>
            </TextBox>
            <FormBox>
               <Form>
                  <InputBox>
                     <Label>Email</Label>
                     <Input
                        autoComplete='off'
                        variant='filled'
                        InputProps={config}
                        name='email'
                        value={form.email}
                        onChange={handleInputChange}
                     />
                     {aux && errors.a.length > 0 && (
                        <ErrorText>{errors.a}</ErrorText>
                     )}
                  </InputBox>
                  <InputBox>
                     <Label>Current Password</Label>
                     <Input
                        autoComplete='off'
                        variant='filled'
                        InputProps={config}
                        name='current_password'
                        value={form.current_password}
                        onChange={handleInputChange}
                     />
                  </InputBox>
                  <InputBox>
                     <Label>New Password</Label>
                     <Input
                        autoComplete='off'
                        variant='filled'
                        InputProps={config}
                        name='new_password'
                        value={form.new_password}
                        onChange={handleInputChange}
                     />
                     {aux && errors.b.length > 0 && (
                        <ErrorText>{errors.b}</ErrorText>
                     )}
                  </InputBox>
                  <InputBox>
                     <Label>Confirm Password</Label>
                     <Input
                        autoComplete='off'
                        variant='filled'
                        InputProps={config}
                        name='confirm_password'
                        value={form.confirm_password}
                        onChange={handleInputChange}
                     />
                     {aux && errors.c.length > 0 && (
                        <ErrorText>{errors.c}</ErrorText>
                     )}
                  </InputBox>
                  <SaveButton onClick={handleSubmit}>SAVE</SaveButton>
               </Form>
            </FormBox>
         </SubContainer>
      </Container>
   );
};

export default Password;
