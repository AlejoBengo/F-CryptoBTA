/*IMPORT UTILITIES*/
import { useEffect, useState } from 'react';
import { EditUser } from '../../../globalStore/reducers/UserSlice/NoiseActions';
/*IMPORT CSS*/
import { Box, Switch, Button } from '@mui/material';
import { ContainerEdit, InputBox, Input, InputEmail } from '../newUserForm/styledComponents';
/*IMPORT DATA*/
import { NewUserData } from '../../../globalStore/reducers/UserSlice/utilities';
import config from '../newUserForm/textFieldConfig';
import {useAppSelector} from '../../../globalStore/store/hooks'
import { setUserData } from '../../../globalStore/reducers/UserSlice/UserSlice';

const FormProfileUser = () => {
  const ui = useAppSelector((state) => state.UserSlice);
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
useEffect(()=>{
   setNewUserData({
      ...newUserData,      
      name: ui.name,
      lastname: ui.lastname,
      email: ui.email,
      password: ui.password,
      country: ui.country,
      city: ui.city,
      address: ui.address,
      postal_code: ui.postal_code,
      phone_number: ui.phone_number})
},[ui])
   const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        
      setNewUserData({
         ...newUserData,
         [event.target.name]: event.target.value,
      });
   };

   const handleSubmmit = (event: React.MouseEvent<HTMLButtonElement>) => {
      EditUser(newUserData)
         .then((newUserData) => {
            setUserData(newUserData)
            console.log(newUserData);
            console.log('SI');
         })
         .catch((err) => {
            console.log(err);
         });
        
   };

   return (
<>
      <ContainerEdit>
         <InputEmail
               InputProps={config}
               name='email'
               value={newUserData.email}
               variant='standard'
               onChange={handleInputChange}
               placeholder='Email'
               disabled 
               style={{backgroundColor:"#fff"}}
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
               value={newUserData.phone_number}
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
