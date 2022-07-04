/*IMPORT UTILITIES*/
import { useParams } from 'react-router-dom';
/*IMPORT COMPONENTS*/
import Particle from '../../../particles/blockchain/Particle';
import ContactView from '../../micro/landingPage/ContactView/ContactView';
import Login from '../session/login/Login';
import Academy from '../Academy/Academy';
import Dashboard from '../../micro/landingPage/Dashboard/Dashboard';
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
            ) : page === 'session' ? (
               <Login />
            ) : page === 'dashboard' ? (
               <Dashboard />
            ) : (
               page === 'academy' && <Academy />
            )}
         </SubContainer>
      </Container>
   );
};

export default LandingPage;
