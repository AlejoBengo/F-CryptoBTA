/*IMPORT UTILITIES*/
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './globalStore/store/hooks';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { createOptions } from './muiAssets/config';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useCookies } from 'react-cookie';
import { setUserData } from './globalStore/reducers/UserSlice/UserSlice';
/*IMPORT COMPONENTS*/
import LandingPage from './components/macro/landingPage/LandingPage';
import NoLoggedNavbar from './components/micro/noLoggedNavbar/NoLoggedNavbar';
import Navbar from './components/micro/navbar/Navbar';
import Redirector from './components/micro/redirector/Redirector';
import Login from './components/macro/session/login/Login';
import NewUserForm from './components/macro/newUserForm/NewUserForm';
import Profile from './components/macro/profile/Profile';
/*IMPORT CSS*/
import { AppContainer } from './utils/appStyledComponents';

const App = () => {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const location = useLocation().pathname;
   const [cookies, setCookie, removeCookie] = useCookies();

   const userInformation = useAppSelector((state) => state.UserSlice);
   const muiTheme = useAppSelector((state) => state.MuiModeSlice.muiTheme);
   const [theme, setTheme] = useState(createTheme(createOptions(muiTheme)));

   useEffect(() => {
      if (cookies.userInformation) {
         dispatch(setUserData(cookies.userInformation));
      }
      if (!userInformation.email.length && !cookies.userInformation) {
         navigate('/0');
      }
   }, [dispatch]);

   useEffect(() => {
      setTheme(createTheme(createOptions(muiTheme)));
   }, [muiTheme]);

   return (
      <ThemeProvider theme={theme}>
         {location === '/0' ||
         location === '/1' ||
         location === '/2' ||
         location === '/3' ||
         location === '/session' ? (
            <NoLoggedNavbar />
         ) : (
            <Navbar />
         )}

         <AppContainer>
            <Routes>
               <Route path='/' element={<Redirector />} />
               <Route path='/:page' element={<LandingPage />} />
               <Route path='/session' element={<Login />} />
               <Route path='/dashboard' element={<h1>NO HAY NADA</h1>} />
               <Route path='/dashboard/newuser' element={<NewUserForm />} />
               <Route path='/dashboard/profile' element={<Profile />} />
            </Routes>
         </AppContainer>
      </ThemeProvider>
   );
};

export default App;
