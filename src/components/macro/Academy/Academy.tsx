/*IMPORT UTILITIES*/
import React, { useState } from 'react';
import { saveSubscriptor } from './utilities';
/*IMPORT CSS*/
import Bttn from '../../../imagenes/AcademyButton.png';
import LuisferPerfil from '../../../imagenes/LuisferPerfil.png';
import Youtube from '../../../imagenes/YTForAcademy.png';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Snackbar } from '@mui/material';
import {
   Container,
   ImgPerfil,
   FreeText,
   SubContainer,
   Paragraph,
   WhiteText,
   BlueText,
   ListBox,
   LiBox,
   Li,
   ImgContainer,
   Input,
   FormBox,
   ImgButton,
} from './styledComponents';
/*IMPORT DATA*/
import { Subscriptor } from './utilities';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
   props,
   ref
) {
   return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Academy = () => {
   const [errorAlert, setErrorAlert] = useState<boolean>(false);
   const [subscriptor, setSubscriptor] = useState<Subscriptor>({
      name: '',
      email: '',
   });

   const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setSubscriptor({
         ...subscriptor,
         [event.target.name]: event.target.value,
      });
   };
   const handleSubmit = (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      saveSubscriptor(subscriptor)
         .then((ans) => {
            if (ans) {
               setSubscriptor({ name: '', email: '' });
               window.location.replace('https://t.me/Community_Bta');
            } else {
               setErrorAlert(true);
               setSubscriptor({ name: '', email: '' });
               setTimeout(() => {
                  setErrorAlert(false);
               }, 4000);
            }
         })
         .catch(() => {
            setErrorAlert(true);
            setSubscriptor({ name: '', email: '' });
            setTimeout(() => {
               setErrorAlert(false);
            }, 4000);
         });
   };

   return (
      <Container>
         <Snackbar open={errorAlert} autoHideDuration={6000}>
            <Alert severity='error' sx={{ width: '100%' }}>
               Something went wrong, please try again.
            </Alert>
         </Snackbar>
         <ImgPerfil src={LuisferPerfil} alt='' />
         <FreeText>GRATIS</FreeText>
         <SubContainer>
            <WhiteText>Horario</WhiteText>
            <Paragraph>
               <BlueText>13:00</BlueText>
               <WhiteText>Hora Madrid Lunes</WhiteText>
               <BlueText>4 de julio</BlueText>
            </Paragraph>
            <ImgContainer>
               <a
                  href='https://www.youtube.com/c/businessTargetAnalytic'
                  target='_blank'
               >
                  <img src={Youtube} alt='' />
               </a>
               <WhiteText
                  style={{ fontSize: '2rem', textDecoration: 'underline' }}
               >
                  LIVE STREAM
               </WhiteText>
            </ImgContainer>
            <BlueText>Temario</BlueText>
            <ListBox>
               <LiBox>
                  <Li />
                  <BlueText>Casas</BlueText>
                  <WhiteText>de cambio.</WhiteText>
               </LiBox>
               <LiBox>
                  <Li />
                  <WhiteText>Tarjetas</WhiteText>
                  <BlueText>Crypto.</BlueText>
               </LiBox>
               <LiBox>
                  <Li />
                  <BlueText>Plataforma</BlueText>
                  <WhiteText>para operar cryptos.</WhiteText>
               </LiBox>
               <LiBox>
                  <Li />
                  <WhiteText>Mercado de </WhiteText>
                  <BlueText>furutos.</BlueText>
               </LiBox>
               <LiBox>
                  <Li />
                  <BlueText>Plataforma</BlueText>
                  <WhiteText>NASDAQ.</WhiteText>
               </LiBox>
               <LiBox>
                  <Li />
                  <WhiteText>Capital para</WhiteText>
                  <BlueText>trabajar.</BlueText>
               </LiBox>
            </ListBox>
            <FormBox>
               <Input
                  name='name'
                  placeholder='Name'
                  autoComplete='on'
                  value={subscriptor.name}
                  onChange={handleInputChange}
               ></Input>
               <Input
                  name='email'
                  placeholder='Email'
                  autoComplete='on'
                  value={subscriptor.email}
                  onChange={handleInputChange}
               />
               <ImgButton onClick={handleSubmit} src={Bttn} alt='' />
            </FormBox>
         </SubContainer>
      </Container>
   );
};

export default Academy;
