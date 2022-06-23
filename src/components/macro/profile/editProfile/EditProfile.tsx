/*IMPORT UTILITIES*/
import React, { useEffect, useState } from 'react';
import {
   useAppSelector,
   useAppDispatch,
} from '../../../../globalStore/store/hooks';
import { useNavigate } from 'react-router-dom';
import { editUser } from '../../../../globalStore/reducers/UserSlice/NoiseActions';
import { setUserData } from '../../../../globalStore/reducers/UserSlice/UserSlice';
import { useCookies } from 'react-cookie';
/*IMPORT CSS*/
import { Backdrop, CircularProgress, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import {
   SubContainer,
   Input,
   Title,
   Form,
   SaveButton,
   ButtonsBox,
   Label,
   InputBox,
} from './styledComponents';
/*IMPORT DATA*/
import { NewUserData } from '../../../../globalStore/reducers/UserSlice/utilities';
import { config } from './utilities';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
   props,
   ref
) {
   return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const EditProfile = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const [cookies, setCookie, removeCookie] = useCookies();
   const UI = useAppSelector((state) => state.UserSlice);

   const [newUserData, setNewUserData] = useState<NewUserData>({
      _id: '',
      name: '',
      lastname: '',
      email: '',
      password: '',
      country: '',
      city: '',
      address: '',
      postal_code: 0,
      phone_number: 0,
      investment: '',
      contract: 6,
      total_investment: '',
      withdrawal_method: '',
      investment_startup: '',
      investment_end: '',
      role: 'user',
      profit_benefit: 0,
      estimated_profit: 0,
      deposit_kind: '',
      fiat_kind: '',
   });
   const [charge, setCharge] = useState<boolean>(false);
   const [successAlert, setSuccessAlert] = useState<boolean>(false);
   const [errorAlert, setErrorAlert] = useState<boolean>(false);

   useEffect(() => {
      setNewUserData({
         ...newUserData,
         name: UI.name,
         lastname: UI.lastname,
         email: UI.email,
         country: UI.country,
         city: UI.city,
         address: UI.address,
         postal_code: UI.postal_code,
         phone_number: UI.phone_number,
      });
   }, [UI]);

   const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setNewUserData({
         ...newUserData,
         [event.target.name]: event.target.value,
      });
   };
   const handleSubmmit = (event: React.MouseEvent<HTMLButtonElement>) => {
      setCharge(true);
      editUser(newUserData)
         .then((editedData) => {
            if (editedData) {
               setSuccessAlert(true);
               setTimeout(() => {
                  removeCookie('userInformation', { path: '/' });
                  setCookie('userInformation', editedData, {
                     path: '/',
                     expires: new Date('December 31, 2022'),
                  });
                  dispatch(setUserData(editedData));
                  setCharge(false);
                  setSuccessAlert(false);
                  navigate('/user/profile');
               }, 2000);
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
   };

   return (
      <SubContainer>
         <Snackbar open={errorAlert} autoHideDuration={6000}>
            <Alert severity='error' sx={{ width: '100%' }}>
               Something went wrong. Please try again later.
            </Alert>
         </Snackbar>
         <Snackbar open={successAlert} autoHideDuration={6000}>
            <Alert severity='success' sx={{ width: '100%' }}>
               Profile edited succsessfully.
            </Alert>
         </Snackbar>
         <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={charge}
         >
            <CircularProgress color='warning' size={100} />
         </Backdrop>
         <Form>
            <Title>{UI.email}</Title>
            <InputBox>
               <Label>Name</Label>
               <Input
                  InputProps={config}
                  name='name'
                  variant='standard'
                  value={newUserData.name}
                  placeholder='Name'
                  onChange={handleInputChange}
               />
            </InputBox>
            <InputBox>
               <Label>Last name</Label>
               <Input
                  InputProps={config}
                  variant='standard'
                  value={newUserData.lastname}
                  name='lastname'
                  onChange={handleInputChange}
                  placeholder='Last Name'
               />
            </InputBox>
            <InputBox>
               <Label>Phone Number</Label>
               <Input
                  InputProps={config}
                  variant='standard'
                  name='phone_number'
                  value={newUserData.phone_number}
                  placeholder='Phone Number'
                  onChange={handleInputChange}
                  type='number'
               />
            </InputBox>
            <InputBox>
               <Label>Address</Label>
               <Input
                  variant='standard'
                  placeholder='Address'
                  name='address'
                  value={newUserData.address}
                  onChange={handleInputChange}
                  InputProps={config}
               />
            </InputBox>
            <InputBox>
               <Label>Country</Label>
               <Input
                  variant='standard'
                  placeholder='Country'
                  name='country'
                  value={newUserData.country}
                  onChange={handleInputChange}
                  InputProps={config}
               />
            </InputBox>
            <InputBox>
               <Label>City</Label>
               <Input
                  variant='standard'
                  placeholder='City'
                  name='city'
                  value={newUserData.city}
                  onChange={handleInputChange}
                  InputProps={config}
               />
            </InputBox>
            <InputBox>
               <Label>Postal Code</Label>
               <Input
                  variant='standard'
                  placeholder='Postal Code'
                  name='postal_code'
                  style={{ appearance: 'none' }}
                  value={newUserData.postal_code}
                  InputProps={config}
                  onChange={handleInputChange}
                  type='number'
               />
            </InputBox>
            <ButtonsBox>
               <SaveButton onClick={handleSubmmit}>SAVE</SaveButton>
            </ButtonsBox>
         </Form>
      </SubContainer>
   );
};

export default EditProfile;
