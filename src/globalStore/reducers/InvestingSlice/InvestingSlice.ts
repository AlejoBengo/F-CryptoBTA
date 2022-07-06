/*IMPORT UTILITIES*/
import { createSlice } from '@reduxjs/toolkit';
/*IMPORT DATA*/
import { initialState } from './utilities';

export const investingSlice = createSlice({
   name: 'InvestingSlice',
   initialState,
   reducers: {
      setAllInvestingOptions: (state, action) => {
         state.allInvestingOptions = action.payload;
         return state;
      },
   },
});

export const { setAllInvestingOptions } = investingSlice.actions;
export default investingSlice.reducer;
