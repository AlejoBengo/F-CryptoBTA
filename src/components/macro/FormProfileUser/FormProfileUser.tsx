/*IMPORT UTILITIES*/
import { useState } from 'react';
import { postNewUser } from '../../../globalStore/reducers/UserSlice/NoiseActions';
/*IMPORT CSS*/
import { Button } from '@mui/material';
import { ContainerEdit, Input } from './styledComponents';
/*IMPORT DATA*/
import { NewUserData } from '../../../globalStore/reducers/UserSlice/utilities';
import { config } from '../newUserForm/utilities';

const FormProfileUser = () => {
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

   const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setNewUserData({
         ...newUserData,
         [event.target.name]: event.target.value,
      });
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
      <>
         <ContainerEdit>
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
               name='password'
               value={newUserData.password}
               variant='standard'
               onChange={handleInputChange}
               placeholder='Password'
            />

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
               InputProps={config}
               variant='standard'
               name='phone_number'
               placeholder='Área Code +1'
               onChange={handleInputChange}
               type='number'
            />
            <Input
               InputProps={config}
               variant='standard'
               name='phone_number'
               placeholder='Phone Number'
               onChange={handleInputChange}
               type='number'
            />

            <Input
               variant='standard'
               placeholder='Postal Code'
               name='postal_code'
               value={newUserData.postal_code}
               InputProps={config}
               onChange={handleInputChange}
               type='number'
            />
            <Button
               onClick={handleSubmmit}
               style={{ backgroundColor: 'yellow', width: '5rem' }}
            >
               SAVE
            </Button>
         </ContainerEdit>
      </>
   );
};

export default FormProfileUser;
