/*IMPORT UTILITIES*/
import { useAppSelector } from '../../../globalStore/store/hooks';
/*IMPORT CSS*/
import { Box } from '@mui/material';
import { Container, Text, Text2,SubContainer,Datos } from './styledComponents';
import { useMemo } from "react";
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
  ArcElement
} from "chart.js";
import { Line ,Pie} from "react-chartjs-2";
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

const inv = 9500
const time = 12
const scores = [ 95, 100 ];
const scores2 = [ 9500, 9975, 10450, 10925, 11400, 11875, 12350, 12825, 13300, 13775, 14250, 14725, 15200 ];
const labels = [0,1,2,3,4,5,6,7,8,9,10,11,12];

const options = {
  fill: false,
  responsive: true,
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

const Graficos  = () => {
   const UI = useAppSelector((state) => state.UserSlice);
   const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Capital",
          data: scores,
          tension: 0.4,
          borderColor: "rgb(125, 192, 192)",
          pointRadius: 5,
          pointBackgroundColor: "rgb(75, 192, 192)",
          backgroundColor: "rgb(75, 192, 192,0.5)",
        },
          // {
          //   label: "Inversion inicial",
          //   tension: 0.03,
          //   data: scores2,
          //   borderColor: "green",
          //   backgroundColor: "rgba(0, 255, 0, 0.3)",
          //   pointRadius: 5,
          // },

      ],
      labels,
    };
  }, []);
 const datas = {
    labels: ['Criptomonedas','Interes Comp Crypto','Mat Prima','Nasdaq'],
    datasets: [
      {
        label: '# of Votes',
        data: [20,15,50,15],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',

        ],
        borderColor: [
          '#0255CA',
          '#F8ED15',
          '#FF5714',
          '#6BDC41',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
      <Container>
        <SubContainer>
<Datos>

        <Text>Inversion: {inv} €</Text>
        <Text>Tiempo de inversion: {time} meses</Text>
        <Text>Porcentaje de beneficio: 60%</Text>
        <Text>Ganancias estimadas del contrato: 5700 €</Text>
</Datos>
<Datos>

      <Pie data={datas}/>
</Datos>
        </SubContainer>
      <SubContainer>
      <Line data={data} options={options} />
      </SubContainer>
      <Text>Inversion: {inv}</Text>
      <Text>Inversion: {inv}</Text>
      
      </Container>
 
  );

};

export default Graficos ;

/**
 * 
 * 
let inv=9500
let gan=[]
let par=[0,500,500,500,566,112,112,112,80,80,80]

for(let i = 0; i<par.length;i++){
  if(gan.length===0){
    gan.push(inv)
  }else{
    gan.push(gan[i-1]+par[i])
  }
}

console.log(gan)
[ 9500, 10000, 10500, 11000, 11566, 11678, 11790, 11902, 11982, 12062, 12142 ]


import { useMemo } from "react";
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
} from "chart.js";
import { Line } from "react-chartjs-2";

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

const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
const scores2 = [1, 3, 2, 2, 4, 4, 5, 3, 2];
const labels = [100, 200, 300, 400, 500, 600, 700];

const options = {
  fill: true,
  responsive: true,
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

export default function LineChart() {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Mis datos",
          data: scores,
          tension: 0.3,
          borderColor: "rgb(75, 192, 192)",
          pointRadius: 6,
          pointBackgroundColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.3)",
        },
        {
          label: "Mis datos (2)",
          tension: 0.3,
          data: scores2,
          borderColor: "green",
          backgroundColor: "rgba(0, 255, 0, 0.3)",
          pointRadius: 6,
        },
      ],
      labels,
    };
  }, []);

  return <Line data={data} options={options} />;
}


 */