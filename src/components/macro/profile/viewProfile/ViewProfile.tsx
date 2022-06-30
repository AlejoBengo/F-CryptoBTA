/*IMPORT UTILITIES*/
import { useAppSelector } from '../../../../globalStore/store/hooks';
import { useNavigate, useParams } from 'react-router-dom';
/*IMPORT CSS*/
import { Box } from '@mui/material';
import {
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
import Graficos from '../../Graficos/Graficos' 

const ViewProfile = () => {
   const navigate = useNavigate();
   const UI = useAppSelector((state) => state.UserSlice);

   return (
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
               <EditButton onClick={() => navigate(`/user/profile/${UI._id}`)}>
                  Edit
               </EditButton>
            </EditButtonBox>
         </Form>

         <Form>
<Graficos/>
         </Form>
         
      </SubContainer>
   );
};

export default ViewProfile;
