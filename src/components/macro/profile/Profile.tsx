/*IMPORT UTILITIES*/
import { useAppSelector } from '../../../globalStore/store/hooks';
import { useNavigate, useParams } from 'react-router-dom';
/*IMPORT COMPONENTS*/
import ColorParticle from '../../../particles/colors/Particle';
import ViewProfile from './viewProfile/ViewProfile';
import EditProfile from './editProfile/EditProfile';
/*IMPORT CSS*/
import { Container } from './styledComponents';

const Profile = () => {
   const navigate = useNavigate();
   const id = useParams();
   const UI = useAppSelector((state) => state.UserSlice);

   return (
      <Container>
         <ColorParticle />
         {!Object.keys(id).length ? <ViewProfile /> : <EditProfile />}
      </Container>
   );
};

export default Profile;
