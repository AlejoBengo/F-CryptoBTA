/*IMPORT UTILITIES*/
import { useAppSelector } from '../../../globalStore/store/hooks';
/*IMPORT CSS*/
import BTALogo from '../../../imagenes/BTALogo.png';
import { Box } from '@mui/material';
import {
   Container,
   FirstOutBox,
   Text,
   OtraCaja,
   NewCaja,
   TextBox,
   FirstInsideBox,
   ThirdOuBox,
   SecondOutBox,
} from './styledComponents';
const Profile = () => {
   const UI = useAppSelector((state) => state.UserSlice);

   return (
      <Container>
         <FirstOutBox>
            <FirstInsideBox
               style={{
                  paddingLeft: '2rem',
                  paddingTop: '2rem',
               }}
            >
               <Text>Name: {UI.name}</Text>
               <Text>Last Name: {UI.lastname}</Text>
               <Text>Email: {UI.email}</Text>
               <Text>User ID: {UI._id}</Text>
               <Text>Phone Number: {UI.phone_number}</Text>
               <Text>Investment: {UI.investment}</Text>
               <Text>Contract: {UI.contract}</Text>
               <Text>Withdrawal Method: {UI.withdrawal_method}</Text>
               <Text>Investment Startup: {UI.investment_startup}</Text>
               <Text>Investment End: {UI.investment_end}</Text>
            </FirstInsideBox>
            <FirstInsideBox
               style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
            >
               <img style={{ width: '25rem' }} src={BTALogo} alt='' />
            </FirstInsideBox>
         </FirstOutBox>
         <ThirdOuBox>
            <OtraCaja>
               <TextBox>
                  <Text>Investment</Text>
                  <Text>{UI.investment}</Text>
               </TextBox>
               <TextBox>
                  <Text>Investment Timelapse</Text>
                  <Text>{UI.contract}</Text>
               </TextBox>
               <TextBox>
                  <Text>Profit Percetage</Text>
                  <Text>__% to __%</Text>
               </TextBox>
               <TextBox>
                  <Text>Estimated Earnings</Text>
                  <Text>__$ to __$</Text>
               </TextBox>
            </OtraCaja>
            <OtraCaja>
               <TextBox>
                  <Text>Available Profit</Text>
                  <Text style={{ color: 'green' }}>0€</Text>
               </TextBox>
               <TextBox>
                  <Text>Executed Withdrawals</Text>
                  <Text>0€</Text>
               </TextBox>
            </OtraCaja>
         </ThirdOuBox>
         <SecondOutBox>
            <NewCaja
               style={{
                  paddingLeft: '2rem',
               }}
            >
               <Text>Managment Closures</Text>
               <Text>Month 1:</Text>
               <Text>Month 2:</Text>
               <Text>Month 3:</Text>
            </NewCaja>
            <NewCaja
               style={{
                  display: 'flex',
                  justifyContent: 'center',
               }}
            >
               <Text>Investment Details</Text>
            </NewCaja>
            <NewCaja
               style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
               }}
            >
               <Text>ACA VA UN GRÁFICO</Text>
            </NewCaja>
         </SecondOutBox>
      </Container>
   );
};

export default Profile;
