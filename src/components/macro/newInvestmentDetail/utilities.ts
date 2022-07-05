import { DetailModel } from '../../../globalStore/reducers/UserSlice/utilities';
export const config = { inputProps: { style: { color: 'white' } } };

export const validator = (data: DetailModel) => {
   let errors = [];
   
   if (typeof data.name !== 'string') {
      errors.push('name debe ser texto.');
   }
   if (typeof data.name !== 'string') {
      errors.push('name debe ser texto.');
   }
   if (typeof data.name !== 'string') {
      errors.push('name debe ser texto.');
   }
   if (typeof data.name !== 'string') {
      errors.push('name debe ser texto.');
   }
   if (typeof data.name !== 'string') {
      errors.push('name debe ser texto.');
   }
   if (typeof data.name !== 'string') {
      errors.push('name debe ser texto.');
   }
   if (typeof data.name !== 'string') {
      errors.push('name debe ser texto.');
   }
   if (typeof data.name !== 'string') {
      errors.push('name debe ser texto.');
   }
   if (typeof data.name !== 'string') {
      errors.push('name debe ser texto.');
   }
   
   return errors;
};
