/*IMPORT UTILITIES*/
import { useState } from 'react';
import { postNewUser } from '../../../globalStore/reducers/UserSlice/NoiseActions';
/*IMPORT CSS*/
import { Box, Switch, Button } from '@mui/material';
import { Container, InputBox, Input } from './styledComponents';
/*IMPORT DATA*/
import { NewUserData } from '../../../globalStore/reducers/UserSlice/utilities';
import config from './textFieldConfig';

const NewUserForm = () => {
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
      contract: '',
      total_investment: '',
      withdrawal_method: '',
      investment_startup: '',
      investment_end: '',
      role: 'user',
   });

   const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setNewUserData({
         ...newUserData,
         [event.target.name]: event.target.value,
      });
   };

   const handleAdminPermissionsChange = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      if (newUserData.role === 'user') {
         setNewUserData({ ...newUserData, role: 'administrator' });
      } else {
         setNewUserData({ ...newUserData, role: 'user' });
      }
   };

   const handleSubmmit = (event: React.MouseEvent<HTMLButtonElement>) => {
      postNewUser(newUserData)
         .then((ans) => {
            console.log('SI');
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <Container>
         <InputBox>
            <Input
               InputProps={config}
               name='name'
               variant='standard'
               value={newUserData.name}
               placeholder='Name'
               onChange={handleInputChange}
            />
            <Input
               InputProps={config}
               variant='standard'
               value={newUserData.lastname}
               name='lastname'
               onChange={handleInputChange}
               placeholder='Last Name'
            />
            <Input
               InputProps={config}
               name='email'
               value={newUserData.email}
               variant='standard'
               onChange={handleInputChange}
               placeholder='Email'
            />
            <Input
               InputProps={config}
               name='password'
               value={newUserData.password}
               variant='standard'
               onChange={handleInputChange}
               placeholder='Password'
            />
         </InputBox>
         <InputBox>
            <Input
               variant='standard'
               placeholder='Country'
               name='country'
               value={newUserData.country}
               onChange={handleInputChange}
               InputProps={config}
            />
            <Input
               variant='standard'
               placeholder='City'
               name='city'
               value={newUserData.city}
               onChange={handleInputChange}
               InputProps={config}
            />
            <Input
               variant='standard'
               placeholder='Address'
               name='address'
               value={newUserData.address}
               onChange={handleInputChange}
               InputProps={config}
            />
            <Input
               variant='standard'
               placeholder='Postal Code'
               name='postal_code'
               value={newUserData.postal_code}
               InputProps={config}
               onChange={handleInputChange}
            />
         </InputBox>
         <InputBox>
            <Input
               InputProps={config}
               variant='standard'
               name='phone_number'
               placeholder='Phone Number'
               onChange={handleInputChange}
            />
            <Input
               InputProps={config}
               variant='standard'
               onChange={handleInputChange}
               name='investment'
               placeholder='Investment'
            />
            <Input
               InputProps={config}
               onChange={handleInputChange}
               name='total_investment'
               variant='standard'
               placeholder='Total Inevstment'
            />
            <Input
               InputProps={config}
               variant='standard'
               name='withdrawal_method'
               onChange={handleInputChange}
               placeholder='Withdrawal Method'
            />
         </InputBox>
         <InputBox>
            <Input
               InputProps={config}
               variant='standard'
               onChange={handleInputChange}
               name='investment_startup'
               placeholder='Investment Startup'
            />
            <Input
               InputProps={config}
               variant='standard'
               onChange={handleInputChange}
               name='investment_end'
               placeholder='Investment End'
            />
            <Input
               InputProps={config}
               variant='standard'
               onChange={handleInputChange}
               name='contract'
               placeholder='Contract'
            />
            <Box
               style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  backgroundColor: 'white',
               }}
            >
               <label style={{ color: 'black', fontFamily: 'Helvetica' }}>
                  Administrator permissions
               </label>
               <Switch
                  onChange={handleAdminPermissionsChange}
                  color='warning'
               />
            </Box>
            <Button
               onClick={handleSubmmit}
               style={{ backgroundColor: 'yellow', width: '5rem' }}
            >
               SAVE
            </Button>
         </InputBox>
      </Container>
   );
};

export default NewUserForm;
