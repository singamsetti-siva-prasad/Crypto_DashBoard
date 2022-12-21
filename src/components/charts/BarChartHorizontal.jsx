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
  height: 50vh;
  width: 50vw;
`;
const BarChartHorizontal = () => {
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
  if (isFetching) return "Loading....";
  console.log(cryptoData);

  const coinsData = cryptoData?.prices;
  console.log(coinsData);

  const chartData = coinsData.map((value) => ({
    x: value[0],
    y: value[1],
  }));

  const options = {
    responsive: true,
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
  };
  const data = {
    labels: chartData.map((value) => moment(value.x).format('"MMM Do YY"')),
    datasets: [
      {
        label: `${selectedCoin} vs ${selectedCurrency}`,
        data: chartData.map((val) => val.y),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Container>
      <Bar data={data} options={options} />
    </Container>
  );
};

export default BarChartHorizontal;
