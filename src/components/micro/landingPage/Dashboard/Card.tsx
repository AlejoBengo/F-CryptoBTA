import { CardBox, CoinName, CoinLogo, CoinNumber } from './styledComponents';
import { UtilData } from './utilities';

const EachCard = ({ name, picture, value }: UtilData) => {
   return (
      <CardBox>
         <CoinNumber>{value}%</CoinNumber>
         <CoinLogo src={picture} alt='' />
         <CoinName>{name}</CoinName>
      </CardBox>
   );
};

export default EachCard;
