/*IMPORT UTILITIES*/
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
/*IMPORT COMPONENTS*/
import Particle from '../../../particles/blockchain/Particle';
import ContactView from '../../micro/landingPage/ContactView/ContactView';
import Login from '../session/login/Login';
/*IMPORT CSS*/
import { Container, SubContainer } from './styledComponents';

const LandingPage = () => {
   const page = useParams().page;

   return (
      <Container>
         <Particle />
         <SubContainer>
            {page === 'contact' ? (
               <ContactView />
            ) : (
               page === 'session' && <Login />
            )}
         </SubContainer>
      </Container>
   );
};

export default LandingPage;
