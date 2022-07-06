/*IMPORT UTILITIES*/
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
/*IMPORT REDUCERS*/
import UserSlice from '../reducers/UserSlice/UserSlice';
import MuiModeSlice from '../reducers/MuiModeSlice/MuiModeSlice';
import InvestingSlice from '../reducers/InvestingSlice/InvestingSlice';

export const store = configureStore({
   reducer: { MuiModeSlice, UserSlice, InvestingSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
>;
