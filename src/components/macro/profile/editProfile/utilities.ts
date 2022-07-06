import { NewUserData } from '../../../../globalStore/reducers/UserSlice/utilities';
export const config = { inputProps: { style: { color: 'white' } } };

export const validator = (data: NewUserData) => {
   let errors = [];
   if (typeof data.name !== 'string') {
      errors.push('name debe ser texto.');
   }
   if (typeof data.lastname !== 'string') {
      errors.push('lastname debe ser texto.');
   }
   if (typeof data.email !== 'string') {
      errors.push('email debe ser texto.');
   }
   if (typeof data.country !== 'string') {
      errors.push('country debe ser texto.');
   }
   if (typeof data.city !== 'string') {
      errors.push('city debe ser texto.');
   }
   if (typeof data.address !== 'string') {
      errors.push('address debe ser texto.');
   }
   if (typeof data.postal_code !== 'number') {
      errors.push('postal_code debe ser un número.');
   }
   if (typeof data.phone_number !== 'number') {
      errors.push('phone_number debe ser un número.');
   }
   return errors;
};
