import axios from 'axios';
import { InvestingOption } from './utilities';

export const getAllInvestingOptions = async () => {
   try {
      const processCompleted = (await axios.get('/investing/all')).data;
      if (processCompleted) {
         return processCompleted;
      } else {
         return false;
      }
   } catch (error) {
      return false;
   }
};
export const postInvestingOption = async (data: InvestingOption) => {
   try {
      const processCompleted = (await axios.post('/investing/newoption', data))
         .data.name
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
export const editInvestingOption = async (data: InvestingOption) => {
   try {
      const processCompleted = (await axios.put('/investing/editoption', data))
         .data.name
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
export const getAllActiveInvestingOptions = async () => {
   try {
      const processCompleted = (await axios.get('/investing/allactive')).data;
      if (processCompleted) {
         return processCompleted;
      } else {
         return false;
      }
   } catch (error) {
      return false;
   }
};
