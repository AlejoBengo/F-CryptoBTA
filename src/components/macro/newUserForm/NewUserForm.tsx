/*IMPORT UTILITIES*/
import { useState } from 'react';
import { postNewUser } from '../../../globalStore/reducers/UserSlice/NoiseActions';
/*IMPORT CSS*/
import { Select, Switch, Button, MenuItem } from '@mui/material';
import {
   Container,
   InputBox,
   Input,
   Label,
   OptionsBox,
   SwitchBox2,
   SwitchBox,
} from './styledComponents';
/*IMPORT DATA*/
import { NewUserData } from '../../../globalStore/reducers/UserSlice/utilities';
import { config, validator } from './utilities';

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
      postal_code: undefined,
      phone_number: undefined,
      investment: '',
      contract: 6,
      total_investment: '',
      withdrawal_method: '',
      investment_startup: '',
      investment_end: '',
      role: 'user',
      profit_benefit: undefined,
      estimated_profit: undefined,
      deposit_kind: 'crypto',
      fiat_kind: 'dolar',
   });
   const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      if (
         event.target.name === 'postal_code' ||
         event.target.name === 'phone_number' ||
         event.target.name === 'profit_benefit' ||
         event.target.name === 'estimated_profit'
      ) {
         setNewUserData({
            ...newUserData,
            [event.target.name]: Number(event.target.value),
         });
      } else {
         setNewUserData({
            ...newUserData,
            [event.target.name]: event.target.value,
         });
      }
   };
   const handleDepositKindChange = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      if (newUserData.deposit_kind === 'fiat') {
         setNewUserData({ ...newUserData, deposit_kind: 'crypto' });
      } else {
         setNewUserData({ ...newUserData, deposit_kind: 'fiat' });
      }
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
   const handleSelector = (event: any) => {
      setNewUserData({
         ...newUserData,
         [event.target.name]: event.target.value,
      });
   };
   const handleSubmmit = (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log(newUserData);
      const allow = validator(newUserData);
      if (!allow.length) {
         postNewUser(newUserData)
            .then((ans) => {
               console.log(ans);
            })
            .catch((err) => {
               console.log(err);
            });
      } else {
         console.log(allow);
      }
   };

   return (
      <Container>
         <InputBox>
            <Input
               InputProps={config}
               name='name'
               variant='standard'
               placeholder='Name'
               autoComplete='off'
               value={newUserData.name}
               onChange={handleInputChange}
            />
            <Input
               InputProps={config}
               name='lastname'
               variant='standard'
               placeholder='Last Name'
               autoComplete='off'
               value={newUserData.lastname}
               onChange={handleInputChange}
            />
            <Input
               InputProps={config}
               name='email'
               variant='standard'
               placeholder='Email'
               autoComplete='off'
               value={newUserData.email}
               onChange={handleInputChange}
            />
            <Input
               InputProps={config}
               name='password'
               variant='standard'
               placeholder='Password'
               value={newUserData.password}
               onChange={handleInputChange}
            />
         </InputBox>
         <InputBox>
            <Input
               InputProps={config}
               name='country'
               variant='standard'
               placeholder='Country'
               autoComplete='off'
               value={newUserData.country}
               onChange={handleInputChange}
            />
            <Input
               InputProps={config}
               name='city'
               variant='standard'
               placeholder='City'
               autoComplete='off'
               value={newUserData.city}
               onChange={handleInputChange}
            />
            <Input
               InputProps={config}
               name='address'
               variant='standard'
               placeholder='Address'
               autoComplete='off'
               value={newUserData.address}
               onChange={handleInputChange}
            />
            <Input
               InputProps={config}
               name='postal_code'
               variant='standard'
               placeholder='Postal Code'
               autoComplete='off'
               value={newUserData.postal_code}
               onChange={handleInputChange}
            />
         </InputBox>
         <InputBox>
            <Input
               InputProps={config}
               variant='standard'
               name='phone_number'
               placeholder='Phone Number'
               autoComplete='off'
               value={newUserData.phone_number}
               onChange={handleInputChange}
            />
            <Input
               InputProps={config}
               name='investment'
               variant='standard'
               placeholder='Investment'
               autoComplete='off'
               value={newUserData.investment}
               onChange={handleInputChange}
            />
            <Input
               InputProps={config}
               name='total_investment'
               variant='standard'
               placeholder='Total Investment'
               autoComplete='off'
               value={newUserData.total_investment}
               onChange={handleInputChange}
            />
            <Select
               name='contract'
               value={newUserData.contract}
               onChange={handleSelector}
               style={{
                  backgroundColor: 'white',
                  width: '5vw',
                  height: '2.5rem',
               }}
            >
               <MenuItem value={6}>6</MenuItem>
               <MenuItem value={9}>9</MenuItem>
               <MenuItem value={12}>12</MenuItem>
               <MenuItem value={15}>15</MenuItem>
               <MenuItem value={18}>18</MenuItem>
               <MenuItem value={21}>21</MenuItem>
               <MenuItem value={24}>24</MenuItem>
               <MenuItem value={27}>27</MenuItem>
               <MenuItem value={30}>30</MenuItem>
            </Select>
            <Label>Meses</Label>
         </InputBox>
         <InputBox>
            <Input
               InputProps={config}
               name='investment_startup'
               variant='standard'
               placeholder='Investment Startup'
               autoComplete='off'
               value={newUserData.investment_startup}
               onChange={handleInputChange}
            />
            <Input
               InputProps={config}
               name='investment_end'
               variant='standard'
               placeholder='Investment End'
               autoComplete='off'
               value={newUserData.investment_end}
               onChange={handleInputChange}
            />
            <Input
               InputProps={config}
               name='profit_benefit'
               variant='standard'
               placeholder='Profit Benefit'
               autoComplete='off'
               value={newUserData.profit_benefit}
               onChange={handleInputChange}
            />
            <Input
               InputProps={config}
               name='estimated_profit'
               variant='standard'
               placeholder='Estimated Profit'
               autoComplete='off'
               value={newUserData.estimated_profit}
               onChange={handleInputChange}
            />
         </InputBox>
         <OptionsBox>
            <SwitchBox2>
               <Label>CRYPTO</Label>
               <Switch onChange={handleDepositKindChange} color='warning' />
               <Label>FIAT</Label>
               {newUserData.deposit_kind === 'fiat' && (
                  <Select
                     name='fiat_kind'
                     value={newUserData.fiat_kind}
                     onChange={handleSelector}
                     style={{
                        backgroundColor: 'white',
                        width: '5vw',
                        height: '2.5rem',
                     }}
                  >
                     <MenuItem value={'dolar'}>Dolar</MenuItem>
                  </Select>
               )}
            </SwitchBox2>
            <SwitchBox>
               <Label>Give administrator permissions</Label>
               <Switch
                  onChange={handleAdminPermissionsChange}
                  color='warning'
               />
            </SwitchBox>
            <Button
               onClick={handleSubmmit}
               style={{ backgroundColor: 'yellow', width: '5rem' }}
            >
               SAVE
            </Button>
         </OptionsBox>
      </Container>
   );
};

export default NewUserForm;
