const scores = [
   9500, 9975, 10450, 10925, 11400, 11875, 12350, 12825, 13300, 13775, 14250,
   14725, 15200,
];

const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const options = {
   fill: false,
   scales: {
      y: {
         min: 0,
      },
   },

   plugins: {
      legend: {
         display: true,
      },
   },
};

export const data = {
   datasets: [
      {
         label: 'Capital',
         data: scores,
         tension: 0.1,
         borderColor: 'rgb(125, 192, 192)',
         pointRadius: 5,
         pointBackgroundColor: 'rgb(75, 192, 192)',
         clip: 1,
         backgroundColor: 'rgb(75, 192, 192,0.5)',
      },
   ],
   labels,
};
