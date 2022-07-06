/*IMPORT CSS*/
import { CardBox, CoinName, CoinLogo, CoinNumber } from './styledComponents';
/*IMPORT DATA*/
import { CardOptionUtilData } from '../../../../globalStore/reducers/InvestingSlice/utilities';

const EachCard = ({ name, picture, value }: CardOptionUtilData) => {
   return (
      <CardBox>
         <CoinNumber>{value}%</CoinNumber>
         <CoinLogo src={picture} alt='' />
         <CoinName>{name}</CoinName>
      </CardBox>
   );
};

export default EachCard;
