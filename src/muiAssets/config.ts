/*IMPORT UTILITIES*/
import { PaletteMode } from '@mui/material';

export const createOptions = (mode: PaletteMode) => {
   return {
      palette: {
         mode,
         ...togglePalette(mode),
      },
   };
};

const togglePalette = (mode: string): object => {
   if (mode === 'light') {
      return {
         proc: {
            main: '#f0ede0', // White
            dark: '#bdbdb9',
         },
         detail: {
            light: '#d02620',
            main: '#a10702', // Red
            dark: '#870804',
         },
         primary: {
            main: '#16171b', // Dark Blue
            light: '#27272a',
            extraDark: '#09090a',
         },
         secondary: {
            main: '#000000', // Black
         },
         warning: {
            main: '#ffd700', // Yellow
         },
         info: {
            main: '#e01a4f', // Pink
         },
         error: {
            main: '#ff0800', // Happy Red
         },
         success: {
            main: '#13a10e', // Green
         },
         sky: {
            main: '#2c4ee6', // Blue
         },
      };
   } else {
      return {
         proc: {
            main: '#fffcec',
         },
         detail: {
            main: 'A10702',
         },
         primary: {
            main: '#0c090d',
         },
         secondary: {
            main: '#000000',
         },
         warning: {
            main: '#ffd700',
         },
         info: {
            main: '#e01a4f',
         },
         error: {
            main: '#ff0800',
         },
         success: {
            main: '#00CC66',
         },
      };
   }
};
