/*IMPORT UTILITIES*/
import { useState, useEffect } from 'react';
import { useAppSelector } from './globalStore/store/hooks';
import { Route, Routes } from 'react-router-dom';
import { createOptions } from './muiAssets/config';
import { ThemeProvider, createTheme } from '@mui/material/styles';
/*IMPORT COMPONENTS*/
import LandingPage from './components/macro/landingPage/LandingPage';
import Navbar from './components/macro/navbar/Navbar';
import Login from './components/macro/session/login/Login';
/*IMPORT CSS*/
import { AppContainer } from './utils/appStyledComponents';

const App = () => {
   const muiTheme = useAppSelector((state) => state.MuiModeSlice.muiTheme);
   const [theme, setTheme] = useState(createTheme(createOptions(muiTheme)));

   useEffect(() => {
      setTheme(createTheme(createOptions(muiTheme)));
   }, [muiTheme]);

   return (
      <ThemeProvider theme={theme}>
         <Navbar />
         <AppContainer>
            <Routes>
               <Route path='/' element={<LandingPage />} />
               <Route path='/session' element={<Login />} />
            </Routes>
         </AppContainer>
      </ThemeProvider>
   );
};

export default App;
