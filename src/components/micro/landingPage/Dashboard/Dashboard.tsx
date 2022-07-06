/*IMPORT UTILITIES*/
import { useEffect } from 'react';
import {
   useAppDispatch,
   useAppSelector,
} from '../../../../globalStore/store/hooks';
import { getAllActiveInvestingOptions } from '../../../../globalStore/reducers/InvestingSlice/NoiseActions';
import { setAllInvestingOptions } from '../../../../globalStore/reducers/InvestingSlice/InvestingSlice';
/*IMPORT COMPONENTS*/
import EachCard from './Card';
import Pastel from '../../../macro/Graficos/Pastel/Pastel';
/*IMPORT CSS*/
import { Box } from '@mui/material';
import {
   Container,
   ActivityDetailBox,
   SubContainer,
   TitleBox,
   TotalBox,
   SubContainer2,
   Title,
} from './styledComponents';
/*IMPORT DATA*/
import { InvestingOption } from '../../../../globalStore/reducers/InvestingSlice/utilities';

const Dashboard = () => {
   const dispatch = useAppDispatch();
   const allInvestingOptions: Array<InvestingOption> = useAppSelector(
      (state) => state.InvestingSlice.allInvestingOptions
   );

   useEffect(() => {
      getAllActiveInvestingOptions()
         .then((ans) => {
            if (ans) {
               dispatch(setAllInvestingOptions(ans));
            }
         })
         .catch((err) => console.log(err));
   }, [dispatch]);

   return (
      <Container>
         <SubContainer>
            <TotalBox>
               <Title>Total Investment in</Title>
               <Title>Business Target Analytic</Title>
               <Title>. . . . . . .</Title>
               <Title>. . . . . . .</Title>
               <Title>. . . . . . .</Title>
            </TotalBox>
            <Pastel investOptions={allInvestingOptions} />
         </SubContainer>
         <SubContainer2>
            <TitleBox>
               <Title>CURRENT FUND HOLDINGS</Title>
            </TitleBox>
            <ActivityDetailBox>
               {allInvestingOptions.length > 0 &&
                  allInvestingOptions.map((option, i) => {
                     return (
                        <EachCard
                           key={i}
                           name={option.name}
                           picture={option.picture}
                           value={option.value}
                        />
                     );
                  })}
            </ActivityDetailBox>
         </SubContainer2>
      </Container>
   );
};

export default Dashboard;
