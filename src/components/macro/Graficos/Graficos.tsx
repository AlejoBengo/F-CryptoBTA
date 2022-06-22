/*IMPORT UTILITIES*/
import { useAppSelector } from '../../../globalStore/store/hooks';
/*IMPORT CSS*/
import { Box } from '@mui/material';
import { Container, Text, Text2,SubContainer } from './styledComponents';

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

const inv = 9500
const scores = [ null, 10000, 10500, 11000, 11566, 11678, 11790, 11902, 11982, 12062, 12142 ];
const scores2 = [inv,inv,inv,inv,inv,inv,inv,inv,inv,inv,inv];
const labels = [0,1, 2, 3, 4, 5, 6, 7,8,9,10,11,12];

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
            label: "Inversion inicial",
            tension: 0.3,
            data: scores2,
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.3)",
            pointRadius: 5,
          },
        {
          label: "Capital",
          data: scores,
          tension: 0.2,
          borderColor: "rgb(75, 192, 192)",
          pointRadius: 5,
          pointBackgroundColor: "rgb(75, 192, 192)",
        },
      ],
      labels,
    };
  }, []);

  return (
      <Container>
      <SubContainer>
      <Line data={data} options={options} />
      </SubContainer>
  
      </Container>
 
  );

};

export default Graficos ;

/**
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