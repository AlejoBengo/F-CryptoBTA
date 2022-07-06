import { InvestingOption } from '../../../globalStore/reducers/InvestingSlice/utilities';
export const config = { inputProps: { style: { color: 'white' } } };

export const validator = (data: InvestingOption) => {
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
