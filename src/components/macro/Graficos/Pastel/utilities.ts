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

const pastel = {
   data: [20, 15, 50, 15],
   labels: ['Criptomonedas', 'Interes Comp Crypto', 'Mat Prima', 'Nasdaq'],
};

export const data = {
   labels: pastel.labels,
   datasets: [
      {
         label: '# of Votes',
         data: pastel.data,
         backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
         ],
         borderColor: ['#0255CA', '#F8ED15', '#FF5714', '#6BDC41'],
         borderWidth: 1,
         radius: 120,
      },
   ],
};
