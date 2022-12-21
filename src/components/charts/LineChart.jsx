import React, { useLayoutEffect } from "react";
import { useGetMarketDataQuery } from "../../features/api/marketDataApiSlice";
import moment from "moment/moment";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 1%;
  box-shadow: 0px 10px 51px 0px rgba(0, 0, 0, 0.1);
`;

function LineChart() {
  const selectedCoin = useSelector(
    (state) => state.selectCryptoCurrency.selectedcryptoCurrency
  );

  const selectedCurrency = useSelector(
    (state) => state.selectCurrency.selectedCurrency
  );
  const selectedTime = useSelector((state) => state.selectTime.selectedTime);
  console.log(selectedTime);
  console.log(selectedCoin);
  console.log(selectedCurrency);

  const { data: cryptoData, isFetching } = useGetMarketDataQuery({
    coin: selectedCoin,
    currency: selectedCurrency,
    time: selectedTime,
    // interval: setInterval(selectedTime),
  });

  // console.log(useGetMarketDataQuery());

  if (isFetching) return "Loading....";
  console.log(cryptoData);

  const coinsData = cryptoData?.prices;
  console.log(coinsData);

  const chartData = coinsData.map((value) => ({
    x: value[0],
    y: value[1],
  }));
  console.log(chartData);

  const options = {
    responsive: true,
    animation: {
      animateScale: true,
    },
    plugins: {
      legend: {
        position: "top",
        align: "end",
      },
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
    datalabels: {
      font: function (context) {
        var width = context.chart.width;
        var size = Math.round(width / 32);
        return {
          size: size,
          weight: 600,
        };
      },
      formatter: function (value) {
        return Math.round(value * 10) / 10;
      },
    },
  };
  const data = {
    labels: chartData.map((value) => moment(value.x).format("MMM Do")),
    datasets: [
      {
        label: `${selectedCoin} vs ${selectedCurrency}`,
        data: chartData.map((val) => val.y),
        borderColor: "rgb(148, 148, 184)",
        backgroundColor: "rgb(77, 77, 255)",
      },
    ],
  };

  return (
    <Container>
      <Line data={data} options={options} />
    </Container>
  );
}

export default LineChart;
