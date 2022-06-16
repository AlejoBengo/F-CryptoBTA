/*IMPORT UTILITIES*/
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
/*IMPORT REDUCERS*/
import MuiModeSlice from '../reducers/MuiModeSlice/MuiModeSlice';

export const store = configureStore({
   reducer: { MuiModeSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
>;
