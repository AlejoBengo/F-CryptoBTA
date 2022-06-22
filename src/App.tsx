/*IMPORT UTILITIES*/
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './globalStore/store/hooks';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { createOptions } from './muiAssets/config';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useCookies } from 'react-cookie';
import { setUserData } from './globalStore/reducers/UserSlice/UserSlice';
/*IMPORT COMPONENTS*/
import LandingPage from './components/macro/landingPage/LandingPage';
import Navbar from './components/macro/navbar/Navbar';
import NewUserForm from './components/macro/newUserForm/NewUserForm';
import Profile from './components/macro/profile/Profile';
import Graficos from './components/macro/Graficos/Graficos'
import EditProfile from './components/macro/profile/editProfile/EditProfile';
/*IMPORT CSS*/
import { Box } from '@mui/material';

const App = () => {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const [cookies, setCookie, removeCookie] = useCookies();
   const userInformation = useAppSelector((state) => state.UserSlice);
   const muiTheme = useAppSelector((state) => state.MuiModeSlice.muiTheme);

   const [theme, setTheme] = useState(createTheme(createOptions(muiTheme)));

   useEffect(() => {
      if (cookies.userInformation) {
         dispatch(setUserData(cookies.userInformation));
      }
      if (!userInformation.email.length && !cookies.userInformation) {
         navigate('/');
      }
   }, [dispatch]);

   useEffect(() => {
      setTheme(createTheme(createOptions(muiTheme)));
   }, [muiTheme]);

   return (
      <ThemeProvider theme={theme}>
         <Navbar />
         <Box>
            <Routes>
               <Route path='/' element={<LandingPage />} />
               <Route path='/:page' element={<LandingPage />} />
               <Route path='/user/newuser' element={<NewUserForm />} />
               <Route path='/user/profile' element={<Profile />} />
               <Route path='/graficos' element={<Graficos />} />
               <Route path='/user/profile/:id' element={<Profile />} />
            </Routes>
         </Box>
      </ThemeProvider>
   );
};

export default App;
