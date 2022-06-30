import axios from 'axios';

export interface Subscriptor {
   name: string;
   email: string;
}

export const saveSubscriptor = async (subscriptor: Subscriptor) => {
   try {
      const status = await axios.post('/academy', subscriptor);
      return status;
   } catch (err) {
      return false;
   }
};
