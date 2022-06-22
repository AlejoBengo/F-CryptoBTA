/*IMPORT UTILITIES*/
import { useAppSelector } from '../../../globalStore/store/hooks';
/*IMPORT CSS*/
import { Box } from '@mui/material';
import { Container, Text, Text2 } from './styledComponents';
const Profile = () => {
   const UI = useAppSelector((state) => state.UserSlice);

   return (
      <Container>
         <Box>
            <Box style={{ display: 'flex', alignItems: 'flex-end' }}>
               <Text>ID: </Text>
               <Text2>{UI._id.split('').slice(0, 7).join('')}</Text2>
            </Box>
            <Box style={{ display: 'flex', alignItems: 'flex-end' }}>
               <Text>Name:</Text>
               <Text2> {UI.name}</Text2>
            </Box>
            <Box style={{ display: 'flex', alignItems: 'flex-end' }}>
               <Text>Last Name: </Text>
               <Text2>{UI.lastname}</Text2>
            </Box>
            <Box style={{ display: 'flex', alignItems: 'flex-end' }}>
               <Text>Email:</Text>
               <Text2> {UI.email}</Text2>
            </Box>
            <Box style={{ display: 'flex', alignItems: 'flex-end' }}>
               <Text>Phone Number: </Text>
               <Text2>{UI.phone_number}</Text2>
            </Box>
            <Box style={{ display: 'flex', alignItems: 'flex-end' }}>
               <Text>Address:</Text>
               <Text2> {UI.address}</Text2>
            </Box>
            <Box style={{ display: 'flex', alignItems: 'flex-end' }}>
               <Text>Country: </Text>
               <Text2>{UI.country}</Text2>
            </Box>
            <Box style={{ display: 'flex', alignItems: 'flex-end' }}>
               <Text>City: </Text>
               <Text2>{UI.city}</Text2>
            </Box>
            <Box style={{ display: 'flex', alignItems: 'flex-end' }}>
               <Text>Postal Code:</Text>
               <Text2> {UI.postal_code}</Text2>
            </Box>
         </Box>
      </Container>
   );
};

export default Profile;
