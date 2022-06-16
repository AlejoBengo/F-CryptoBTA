/*IMPORT UTILITIES*/
import { PaletteMode } from '@mui/material';

export interface InitialState {
   muiTheme: PaletteMode;
}

export const initialState: InitialState = {
   muiTheme: 'light',
};
