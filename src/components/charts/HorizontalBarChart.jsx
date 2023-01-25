import React from "react";
import { useGetMarketDataQuery } from "../../features/api/marketDataApiSlice";
import moment from "moment/moment";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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

const HorizontalBarChart = () => {
  //Get selected crypto currency, currency, and selected time from store
  const selectedCoin = useSelector(
    (state) => state.selectCryptoCurrency.selectedcryptoCurrency
  );

  const selectedCurrency = useSelector(
    (state) => state.selectCurrency.selectedCurrency
  );
  const selectedTime = useSelector((state) => state.selectTime.selectedTime);

  //fetch data
  const { data: cryptoData, isFetching } = useGetMarketDataQuery({
    coin: selectedCoin,
    currency: selectedCurrency,
    time: selectedTime,
  });
  if (isFetching) return "Loading....";

  const coinsData = cryptoData?.prices;

  const chartData = coinsData.map((value) => ({
    x: value[0],
    y: value[1],
  }));

  //chart options
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
    title: {
      display: true,
      text: "Horizontal Bar Chart",
    },
    indexAxis: "y",

    elements: {
      bar: {
        borderWidth: 2,
      },
    },
  };

  //chart data
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
      <Bar data={data} options={options} />
    </Container>
  );
};

export default HorizontalBarChart;
