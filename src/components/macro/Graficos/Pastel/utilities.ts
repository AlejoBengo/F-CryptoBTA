import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
   Filler,
   ArcElement,
} from 'chart.js';
import { InvestingOption } from '../../../../globalStore/reducers/InvestingSlice/utilities';

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
   Filler
);

export interface Data {
   labels: Array<string>;
   datasets: Array<any>;
}

export interface PastelProperties {
   investOptions: Array<InvestingOption>;
}

interface Values {
   crypto: number;
   interescomp: number;
   matprima: number;
   nasdaq: number;
}

export const calulatePastelPorcentages = (
   allInvestingOptions: Array<InvestingOption>
) => {
   let values: Values = {
      crypto: 0,
      interescomp: 0,
      matprima: 0,
      nasdaq: 0,
   };
   allInvestingOptions.forEach((option) => {
      if (option.type === 'crypto') {
         values.crypto += option.value;
      } else if (option.type === 'matprima') {
         values.matprima += option.value;
      } else if (option.type === 'nasdaq') {
         values.nasdaq += option.value;
      } else {
         values.interescomp += option.value;
      }
   });
   let settedValues: Array<number> = [];
   settedValues.push(
      values.crypto,
      values.interescomp,
      values.matprima,
      values.nasdaq
   );

   return {
      labels: ['CRYPTO', 'INTERÉS COMPUESTO', 'RAW MATERIAL', 'NASDAQ'],
      datasets: [
         {
            label: '# of Votes',
            data: settedValues,
            radius: 120,
            backgroundColor: [
               'rgba(255, 99, 132, 0.5)',
               'rgba(54, 162, 235, 0.5)',
               'rgba(255, 206, 86, 0.5)',
               'rgba(75, 192, 192, 0.5)',
               'rgba(153, 102, 255, 0.2)',
               'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: ['#000', '#000', '#000', '#000'],
            borderWidth: 1,
         },
      ],
   };
};
