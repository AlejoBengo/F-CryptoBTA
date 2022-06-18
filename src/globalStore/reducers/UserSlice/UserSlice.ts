/*IMPORT UTILITIES*/
import { createSlice } from '@reduxjs/toolkit';
/*IMPORT DATA*/
import { initialState } from './utilities';

export const modeSlice = createSlice({
   name: 'MuiModeSlice',
   initialState,
   reducers: {
      //   toggleMode: (state) => {
      //      state.muiTheme = state.muiTheme === 'light' ? 'dark' : 'light';
      //      return state;
      //   },
      //   setMode: (state, action) => {
      //      state.muiTheme = action.payload;
      //      return state;
      //   },
   },
});

// export const { toggleMode, setMode } = modeSlice.actions;
export default modeSlice.reducer;
