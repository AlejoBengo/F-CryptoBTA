/*IMPORT UTILITIES*/
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './globalStore/store/hooks';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { createOptions } from './muiAssets/config';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useCookies } from 'react-cookie';
import { setUserData } from './globalStore/reducers/UserSlice/UserSlice';
/*IMPORT COMPONENTS*/
import LandingPage from './components/macro/landingPage/LandingPage';
import Navbar from './components/macro/navbar/Navbar';
import NewUserForm from './components/macro/newUserForm/NewUserForm';
import Profile from './components/macro/profile/Profile';
import Password from './components/macro/password/Password';
/*IMPORT CSS*/
import { Box } from '@mui/material';

const App = () => {
   const navigate = useNavigate();
   const location = useLocation().pathname;
   const dispatch = useAppDispatch();
   const [cookies, setCookie, removeCookie] = useCookies();
   const userInformation = useAppSelector((state) => state.UserSlice);
   const muiTheme = useAppSelector((state) => state.MuiModeSlice.muiTheme);
   const [theme, setTheme] = useState(createTheme(createOptions(muiTheme)));

   useEffect(() => {
      if (cookies.userInformation) {
         dispatch(setUserData(cookies.userInformation));
      }
      if (
         !userInformation.email.length &&
         !cookies.userInformation &&
         location !== '/' &&
         location !== '/dashboard' &&
         location !== '/contact' &&
         location !== '/session' &&
         location !== '/academy'
      ) {
         navigate('/');
      }
   }, [dispatch, location]);

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
               <Route path='/user/profile/:id' element={<Profile />} />
               <Route path='/user/password' element={<Password />} />
            </Routes>
         </Box>
      </ThemeProvider>
   );
};

export default App;
