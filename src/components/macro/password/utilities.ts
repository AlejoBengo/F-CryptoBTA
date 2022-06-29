import { ChangePasswordData } from '../../../globalStore/reducers/UserSlice/utilities';
export const config = { inputProps: { style: { color: 'white' } } };

export const validator = (form: ChangePasswordData) => {
   let errors = {
      a: '',
      b: '',
      c: '',
   };
   if (!form.email.split('').includes('@') || form.email.length < 6) {
      errors.a = 'This email is not valid.';
   }
   if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(form.new_password)) {
      errors.b = `Password must have: 8/16 chars, 1 uppercase, 1 lowercase and 1 digit.`;
   }
   if (form.new_password !== form.confirm_password) {
      errors.c = 'This password is incorrect.';
   }
   return errors;
};
