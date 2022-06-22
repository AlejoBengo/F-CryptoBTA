/*IMPORT UTILITIES*/
import { useAppSelector } from '../../../globalStore/store/hooks';
/*IMPORT COMPONENTS*/
import ColorParticle from '../../../particles/colors/Particle';
/*IMPORT CSS*/
import { Box } from '@mui/material';
import {
   Container,
   SubContainer,
   Form,
   Title,
   TextId,
   Text,
   EachTextBox,
   EditButton,
   EditButtonBox,
   Text2,
} from './styledComponents';
const Profile = () => {
   const UI = useAppSelector((state) => state.UserSlice);

   return (
      <Container>
         <ColorParticle />
         <SubContainer>
            <Form>
               <TextId>{UI._id.split('').slice(0, 7).join('')}</TextId>
               <Box style={{ display: 'flex' }}>
                  <Title>{UI.name}</Title> <Title>{UI.lastname}</Title>
               </Box>
               <EachTextBox>
                  <Text>Email:</Text>
                  <Text2> {UI.email}</Text2>
               </EachTextBox>
               <EachTextBox>
                  <Text>Phone Number: </Text>
                  <Text2>{UI.phone_number}</Text2>
               </EachTextBox>
               <EachTextBox>
                  <Text>Address:</Text>
                  <Text2> {UI.address}</Text2>
               </EachTextBox>
               <EachTextBox>
                  <Text>Country: </Text>
                  <Text2>{UI.country}</Text2>
               </EachTextBox>
               <EachTextBox>
                  <Text>City: </Text>
                  <Text2>{UI.city}</Text2>
               </EachTextBox>
               <EachTextBox>
                  <Text>Postal Code:</Text>
                  <Text2> {UI.postal_code}</Text2>
               </EachTextBox>
               <EditButtonBox>
                  <EditButton>Edit</EditButton>
               </EditButtonBox>
            </Form>
         </SubContainer>
      </Container>
   );
};

export default Profile;
// <Container>
{
   /* <Box>
            <EachTextBox>
               <Text>Last Name: </Text>
               <Text2>{UI.lastname}</Text2>
            </Box>
            <EachTextBox>
               <Text>Email:</Text>
               <Text2> {UI.email}</Text2>
            </Box>
            <EachTextBox>
               <Text>Phone Number: </Text>
               <Text2>{UI.phone_number}</Text2>
            </Box>
            <EachTextBox>
               <Text>Address:</Text>
               <Text2> {UI.address}</Text2>
            </Box>
            <EachTextBox>
               <Text>Country: </Text>
               <Text2>{UI.country}</Text2>
            </Box>
            <EachTextBox>
               <Text>City: </Text>
               <Text2>{UI.city}</Text2>
            </Box>
            <EachTextBox>
               <Text>Postal Code:</Text>
               <Text2> {UI.postal_code}</Text2>
            </Box>
         </Box> */
}
// </Container>
