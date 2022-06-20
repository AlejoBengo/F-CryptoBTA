/*IMPORT UTILITIES*/
import { createSlice } from '@reduxjs/toolkit';
/*IMPORT DATA*/
import { initialState } from './utilities';

export const userSlice = createSlice({
   name: 'UserSlice',
   initialState,
   reducers: {
      setUserData: (state, action) => {
         state = action.payload;
         return state;
      },
   },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
