import axios from 'axios';
import { NewUserData, UserDataForLogin } from './utilities';

export const postNewUser = async (data: NewUserData) => {
   try {
      const processCompleted = (await axios.post('/user/postuser', data)).data
         .name
         ? true
         : false;
      if (processCompleted) {
         return true;
      } else {
         return false;
      }
   } catch (error) {
      return false;
   }
};

export const fetchUserForLogin = async (data: UserDataForLogin) => {
   try {
      const isRegistred = await axios.put('/logreg/login', data);
      if (isRegistred) {
         return isRegistred.data;
      } else {
         return false;
      }
   } catch (error) {
      return false;
   }
};
